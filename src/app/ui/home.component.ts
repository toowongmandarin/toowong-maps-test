import { Component,ViewChild } from '@angular/core';
import { AuthService, MapsUser } from '../user/user.component';
import { MapComponent } from '../map/map.component';
import { MdDialog, MdDialogRef } from '@angular/material';
import { MapsListComponent } from '../map/mapslist.component';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'home-component',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent extends BaseComponent {
  errorMsg: string;
  @ViewChild('myMapsList')
  private mapListComp: MapsListComponent;

  constructor(fireAuth: AuthService, dialog: MdDialog) {
    super();
    this.dialog = dialog;
    this.fireAuth = fireAuth;
    this.errorMsg = this.fireAuth.currentUser ? "" : "Please login.";
    this.requireLogin();
  }

  postLoginSetup() {
    console.log(`Home Component Post Login`);
    this.mapListComp.load();
  }

  isAdmin() {
    return this.fireAuth.currentUser && this.fireAuth.currentUser.isAdmin();
  }

}
