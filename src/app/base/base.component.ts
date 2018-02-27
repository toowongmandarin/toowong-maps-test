import { Component, Input, ViewChild, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { environment } from '../../environments/environment';
import { MatDialog, MatDialogRef } from '@angular/material';
import { LoadingDialog } from '../map/loading-diag.component';
import * as _ from 'lodash';
import { AuthService, MapsUser } from '../user/user.component';
import { LoginComponent } from '../ui/login.component';

export class BaseComponent implements OnInit, OnDestroy {
  protected loadingDialog: any;
  protected subs: any[] = [];
  protected dialog: MatDialog;
  protected fireAuth: AuthService;
  protected loginDiag: MatDialogRef<any>;
  public errorMsg: string;

  constructor() {
  }

  showLoadingDialog() {
    this.loadingDialog = this.dialog.open(LoadingDialog, {disableClose:true});
  }

  hideLoadingDialog() {
    if (this.loadingDialog) {
      this.loadingDialog.close();
    }
  }

  ngOnInit() {

  }

  ngOnDestroy() {
    this.unsubscribeAll();
  }

  unsubscribeAll() {
    _.forEach(this.subs, sub => {
      sub.unsubscribe();
    });
  }

  requireLogin() {
    this.subs.push(this.fireAuth.getUserObs().subscribe(user => {
      if (user) {
        if (this.loginDiag) {
          this.loginDiag.close();
        }
        if (this.fireAuth.currentUser) {
          this.postLoginSetup();
        } else {
          this.fireAuth.getAllUserInfo();
          this.subs.push(this.fireAuth.onCurrentUserInfo.subscribe(user => {
            this.postLoginSetup();
          }));
        }
      } else {
        this.loginDiag = this.dialog.open(LoginComponent, {data: {consumer: this}, disableClose: true});
      }
    }));
  }

  postLoginSetup() {
    console.log(`BaseComponent post login, doing nothing.`);
  }

  login(creds) {
    this.errorMsg = "";
    console.log(`BaseComponent logging in: `);
    console.log(creds);
    this.showLoadingDialog();
    this.fireAuth.login(creds.email, creds.password).then(user => {
      this.hideLoadingDialog();
    }).catch(error => {
      this.hideLoadingDialog();
      // Handle Errors here.
      console.log(error);
      const errorMessage = error.message;
      this.errorMsg = errorMessage;
    });
  }

  logout() {
    // this.mapComp.clearMaps();
    this.fireAuth.logout();
  }
}
