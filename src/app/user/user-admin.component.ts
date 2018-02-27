import { Component, Inject } from '@angular/core';
import { AuthService } from './user.component';
import { BaseComponent } from '../base/base.component';
import * as _ from 'lodash';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'user-admin',
  templateUrl: './user-admin.component.html'
})
export class UserAdminComponent extends BaseComponent {
  user: any;
  subs: any[] = [];
  userSelectTitle: string;
  userSelectDesc: string;
  errorMsg: string;
  userList: any[];
  currentDlg: any;
  selectedUsers: any;
  placeHolderTxt: string;
  newUser: any;

  constructor(public fireAuth: AuthService, protected dialog: MatDialog) {
    super();

  }

  ngOnInit() {
    this.user = this.fireAuth.currentUser;
    this.subs.push(this.fireAuth.onCurrentUserInfo.subscribe(user => {
      this.user = this.fireAuth.currentUser;
    }));
    if (!this.userList) {
      this.subs.push(this.fireAuth.getAllUsersList().subscribe(userList => {
        this.userList = userList;
      }));
    }
  }

  isUpdater() {
    return this.user && (this.user.isAdmin() || this.user.isUpdater() );
  }

  resetPassword() {
    this.userSelectTitle = "User Password Reset";
    this.userSelectDesc = "Type the names of users";
    this.placeHolderTxt = "Publisher name";
    this.showDlg();
  }

  addUser() {
    this.userSelectTitle = "Create New User";
    this.userSelectDesc = "Provide new user/publisher details";
    this.newUser = {name: '', email: '', role: 'publisher'};
    this.showUserDlg();
  }

  showDlg() {
    if (!this.currentDlg) {
      this.currentDlg = this.dialog.open(SelectUserDlgComponent, {
        data: {consumer: this},
        disableClose: true
      });
    }
  }

  showUserDlg() {
    if (!this.currentDlg) {
      this.currentDlg = this.dialog.open(CreateUserDlgComponent, {
        data: {consumer: this},
        disableClose: true
      });
    }
  }

  closeDlg() {
    this.dialog.closeAll();
    this.currentDlg = null;
    this.selectedUsers = null;
  }

  sendResetPassword() {
    const numToProcess = this.selectedUsers ? this.selectedUsers.length : 0;
    // let processCtr = 0;
    _.forEach(this.selectedUsers, (user) => {
      if (user.email) {
        console.log(`Resetting: `);
        console.log(user);
        this.fireAuth.sendPasswordReset(user.email);
        // processCtr++;
      } else {
        console.log(`No email:`);
        console.log(user);
      }
    });
    // if (processCtr >= numToProcess) {
    //
    // }
    this.closeDlg();
  }

  createUser() {
    this.fireAuth.createUser(this.newUser.name, this.newUser.email, this.newUser.role);
    this.closeDlg();
  }



  cancel() {
    this.closeDlg();
  }
}

@Component({
  selector: 'selectuser-dlg',
  templateUrl: './user-admin-selectuser.html'
})
export class SelectUserDlgComponent {

  constructor(public dialogRef: MatDialogRef<any>, @Inject(MAT_DIALOG_DATA) public data: any) {

  }

}

@Component({
  selector: 'selectuser-dlg',
  templateUrl: './user-admin-createuser.html'
})
export class CreateUserDlgComponent {

  constructor(public dialogRef: MatDialogRef<any>, @Inject(MAT_DIALOG_DATA) public data: any) {

  }

}
