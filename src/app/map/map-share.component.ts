import { Component, Input, ViewChild, EventEmitter, Output, Inject } from '@angular/core';
import { MapService, Fsg, Map } from './map.service';
import { Observable } from 'rxjs/Rx';
import { MdDialog, MdDialogRef, MD_DIALOG_DATA } from '@angular/material';
import { LoadingDialog } from './loading-diag.component';
import { BaseComponent } from '../base/base.component';
import { AuthService, MapsUser } from '../user/user.component';
import { WindowRef } from './windowref.service';
import moment from 'moment-es6';
import * as _ from 'lodash';

@Component({
  selector: 'mapshare',
  templateUrl: './map-share.component.html'
})
export class MapShareComponent extends BaseComponent {
  @Input() map: Map;
  mapUsers: any[] = [];
  errorMsg: string;
  shareDlg: MdDialogRef<any>;
  userList:any;
  newUsersList: any[] = [];
  removeUsersList: any[] = [];
  curOwner: any = null;
  placeHolderTxt: string = 'Type and select name';
  ownerCardTitle: string = 'Map Owner';
  ownerCardDesc: string = `An owner can use/share the map within 2 weeks from the time of assignment. After this time, the map will be removed from the owner's assignment list. Please reassign ownership if needed. A map can only have one owner. Removing an owner, will remove all users.`;
  shareCardTitle: string = 'Map Users';
  shareCardDesc: string = `A user will have access to the map within the day of the assignment. After this time, the map will be removed from the user's list. Please reshare again if needed.`;
  ownerMode: boolean = false; // whether to set owners or sharers

  constructor(dialog: MdDialog, fireAuth: AuthService, protected mapService: MapService, private winRef: WindowRef) {
    super();
    this.dialog = dialog;
    this.fireAuth = fireAuth;
  }

  public showShareDlg(ownerMode:boolean = true) {
    this.ownerMode = ownerMode;
    this.subs.push(this.fireAuth.getAllUsersList().subscribe(userList => {
      this.mapUsers = userList;
      if (this.ownerMode && this.map.hasOwner()) {
        this.curOwner = this.map.getOwner();
        this.userList = [this.curOwner];
      } else {
        this.userList = this.map.getUsersList();
      }
      if (!this.shareDlg) {
        this.shareDlg = this.dialog.open(MapShareDlgComponent, {
          data: {consumer: this},
          disableClose: true
        });
      }
    }));
  }

  done() {
    this.showLoadingDialog();
    if (this.ownerMode) {
      if (_.isEmpty(this.userList)){
        this.mapService.removeOwner(this.map, this.curOwner);
        this.mapService.removeUsers(this.map, this.map.getUsersList());
      } else {
        // set to 2 weeks from now...
        this.userList[0].expiry = moment().hour(20).minute(0).second(0).add(1, 'week').toDate(); // set to expire at 8 pm eery time..
        this.mapService.updateOwner(this.map, this.userList[0], this.curOwner);
      }
    } else {
      if (_.isEmpty(this.userList)){
        console.log(`Remove userslist`);
        console.log(this.removeUsersList);
        this.mapService.removeUsers(this.map, this.removeUsersList);
      } else {
        // set to 1 day for all new items...
        _.forEach(this.newUsersList, (entry) => {
          entry.expiry = moment().hour(20).minute(0).second(0).add(1, 'day').toDate(); // 8 pm too
        });
        this.mapService.removeUsers(this.map, this.removeUsersList);
        this.mapService.updateUsers(this.map, this.userList);
      }
    }
    this.closeShareDialog();
    this.hideLoadingDialog();
  }

  cancel() {
    this.closeShareDialog();
  }

  closeShareDialog() {
    this.shareDlg.close();
    this.shareDlg = null;
  }

  canAssignOwner() {
    return this.fireAuth.currentUser.isAdmin() || this.fireAuth.currentUser.isUpdater();
  }

  canShare() {
    return this.map.hasOwner() ; //&& (this.fireAuth.currentUser.isAdmin() || this.fireAuth.currentUser.userInfoObj.$key == this.map.getOwner().id);
  }

  canReturn() {
    return this.map.hasOwner() && this.map.isOwner(this.fireAuth.currentUser);
  }

  returnMap() {
    if (this.fireAuth.currentUser.isAdmin()) {
      this.mapService.removeUsers(this.map, this.map.getUsersList());
      this.mapService.updateUsers(this.map, []);
      this.mapService.removeOwner(this.map, this.map.getOwner());
    } else {
      if (this.map.isOwner(this.fireAuth.currentUser)) {
        this.mapService.removeUsers(this.map, this.map.getUsersList());
        this.mapService.updateUsers(this.map, []);
        this.mapService.removeOwner(this.map, this.map.getOwner());
      }
    }
  }

  onItemAdded(item) {
    this.newUsersList.push(item);
    _.remove(this.removeUsersList, (entry) => {
      return entry.id == item.id;
    });
  }

  onItemRemove(item) {
    console.log(item);
    _.remove(this.newUsersList, (entry) => {
      return entry.id == item.id;
    });
    this.removeUsersList.push(item);
  }
}


@Component({
  selector: 'share-dlg',
  templateUrl: './map-share-dlg.component.html'
})
export class MapShareDlgComponent {

  constructor(public dialogRef: MdDialogRef<any>, @Inject(MD_DIALOG_DATA) protected data: any) {

  }

  displayFn(mapUser: MapsUser):string {
    return mapUser ? mapUser.userInfoObj.name : "";
  }

}
