import { Component, Input, ViewChild, EventEmitter } from '@angular/core';
import { MapService, Fsg, Map } from './map.service';
import { Observable } from 'rxjs/Rx';
import { environment } from '../../environments/environment';
import { MdDialog, MdDialogRef } from '@angular/material';
import { LoadingDialog } from './loading-diag.component';
import { BaseComponent } from '../base/base.component';
import { AuthService, MapsUser } from '../user/user.component';

import * as _ from 'lodash';

@Component({
  selector: 'mapslist-component',
  templateUrl: './mapslist.component.html',
  styleUrls: ['./mapslist.component.css']
})
export class MapsListComponent extends BaseComponent {
  loadingDialog: any;
  fsgMaps: Fsg[];
  loaded: boolean = false;

  constructor(dialog: MdDialog, fireAuth: AuthService, protected mapService: MapService) {
    super();
    this.dialog = dialog;
    this.fireAuth = fireAuth;
  }

  public load() {
    this.showLoadingDialog();
    if (this.fireAuth.currentUser.isAdmin()) {
      // load all if an admin...
      console.log(`Loading current maps...`);
      this.getAllMapsList();
    } else {
      // load all assigned maps...
      this.getAllUserMaps();
    }
    // pre-load the user list...
    this.subs.push(this.fireAuth.getAllUsersList().subscribe(userList => {
      console.log(`User list pre-loaded..`);
    }));
  }

  protected getAllUserMaps() {
    // maps listing depend on roles...
    console.log(`Getting all user maps...`);
    this.subs.push(this.mapService.getUserMaps(this.fireAuth.currentUser).subscribe(fsgMaps => {
      console.log(`Got all user maps...`);
      if (!this.loaded) {
        _.forEach(fsgMaps, (fsgMap) => {
          fsgMap.expanded = false;
        });
        this.loaded = true;
      }
      this.fsgMaps = fsgMaps;
      this.hideLoadingDialog();
    }));
  }

  protected getAllMapsList() {
    // maps listing depend on roles...
    console.log(`Getting all maps...`);
    this.subs.push(this.mapService.getAllFsgMapsList().subscribe(fsgMaps => {
      console.log(`Got all maps...`);
      if (!this.loaded) {
        _.forEach(fsgMaps, (fsgMap) => {
          fsgMap.expanded = false;
        });
        this.loaded = true;
      }
      this.fsgMaps = fsgMaps;
      this.hideLoadingDialog();
    }));
  }

  getMapUsers(map: Map) {
    let userList = '';
    _.forEach(map.getUsersList(), entry => {
      userList = `${_.isEmpty(userList) ? userList: userList + ', '}${entry.name}`;
    });
    return userList;
  }

  public toggleExpand(fsg, expanded) {
    fsg.expanded = expanded;
  }

  canOpenMap(map) {
    // if (this.fireAuth.currentUser) {
    //   console.log(map.isUser(this.fireAuth.currentUser) || this.fireAuth.currentUser.isAdmin() || this.fireAuth.currentUser.isUpdater());
    // }
    return this.fireAuth.currentUser && (map.isUser(this.fireAuth.currentUser) || this.fireAuth.currentUser.isAdmin() || this.fireAuth.currentUser.isUpdater());
  }

}
