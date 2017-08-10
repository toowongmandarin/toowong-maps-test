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
  hasMaps: boolean = false;
  oldFsgMaps: Fsg[];

  constructor(dialog: MdDialog, fireAuth: AuthService, protected mapService: MapService) {
    super();
    this.dialog = dialog;
    this.fireAuth = fireAuth;
  }

  public load() {
    this.showLoadingDialog();
    if (this.fireAuth.currentUser.isAdmin() || this.fireAuth.currentUser.isUpdater()) {
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
      // remove all maps not shared....
      _.forEach(fsgMaps, (fsg, idx) => {
        _.remove(fsg.maps, map => {
          return !map.isUser(this.fireAuth.currentUser);
        });
        if (fsg.maps.length == 0 && fsgMaps.length > 0) {
          fsgMaps.splice(idx, 1);
        }
      });
      this.hasMaps = fsgMaps && fsgMaps.length > 0;
      if (!this.hasMaps) {
        this.oldFsgMaps = [];
        this.fsgMaps = [];

      }
      if (this.oldFsgMaps) {
        _.forEach(this.oldFsgMaps, (fsgMap) => {
          const currentFsg = _.find(this.fsgMaps, (curFsg) => {
            return curFsg.fsgName == fsgMap.fsgName
          });
          if (currentFsg) {
            currentFsg.expanded = fsgMap.expanded;
          }
        });
      }
      this.oldFsgMaps = this.fsgMaps;
      this.fsgMaps = fsgMaps;
      this.hideLoadingDialog();
    }));
  }

  protected getAllMapsList() {
    // maps listing depend on roles...
    console.log(`Getting all maps...`);
    this.hasMaps = true;
    if (this.fireAuth.currentUser.isAdmin() || this.fireAuth.currentUser.isUpdater()) {
      this.subs.push(this.mapService.getAllFsgMapsList().flatMap(fsgMaps => {
        this.fsgMaps = fsgMaps;
        console.log("All maps:")
        console.log(fsgMaps);
        return this.mapService.getUserMaps(this.fireAuth.currentUser);
      })
      .subscribe(userMaps => {
        console.log(`User maps:`);
        console.log(userMaps);

        if (this.fsgMaps.length > 0 && userMaps.length > 0) {
          // check if we need to add the "Your Maps"...
          const userFsg = _.find(this.fsgMaps, (curFsg) => {
            return curFsg.fsgName == userMaps[0].fsgName;
          });
          if (!userFsg) {
            this.fsgMaps = userMaps.concat(this.fsgMaps);
          }
        }

        if (this.oldFsgMaps) {
          // record the last diag open...
          _.forEach(this.oldFsgMaps, (fsgMap) => {
            console.log(`Old:`);
            console.log(fsgMap);
            const currentFsg = _.find(this.fsgMaps, (curFsg) => {
              return curFsg.fsgName == fsgMap.fsgName
            });
            if (currentFsg) {
              console.log(`Set expanded state.`);
              currentFsg.expanded = fsgMap.expanded;
            }
          });
        }
        this.oldFsgMaps = this.fsgMaps;
        this.hideLoadingDialog();
      }));
    }
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
