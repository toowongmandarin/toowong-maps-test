import { Component,ViewChild } from '@angular/core';
import { AuthService, MapsUser } from '../user/user.component';
import { MapComponent } from '../map/map.component';
import { MdDialog, MdDialogRef, MdIconRegistry } from '@angular/material';
import { MapsListComponent } from '../map/mapslist.component';
import { BaseComponent } from '../base/base.component';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'home-component',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent extends BaseComponent {
  errorMsg: string;
  @ViewChild('myMapsList')
  private mapListComp: MapsListComponent;
  addUrl: string;
  
  constructor(fireAuth: AuthService, dialog: MdDialog, iconRegistry: MdIconRegistry, sanitizer: DomSanitizer) {
    super();
    this.dialog = dialog;
    this.fireAuth = fireAuth;
    this.errorMsg = this.fireAuth.currentUser ? "" : "Please login.";
    this.requireLogin();
    iconRegistry.addSvgIcon('add-address',
        sanitizer.bypassSecurityTrustResourceUrl('/assets/images/add_address.svg'));
  }

  postLoginSetup() {
    console.log(`Home Component Post Login`);
    const fullName = (this.fireAuth.currentUser && this.fireAuth.currentUser.userInfoObj) ? this.fireAuth.currentUser.userInfoObj.name : '';
    this.addUrl = `https://docs.google.com/forms/d/e/1FAIpQLScYHfYNwnSIWAL9RAH3rEPC74WfkFT0FgcvaJKx1nAIROXS6A/viewform?usp=pp_url&entry.1810388592=Yes&entry.1189370340&entry.45257833&entry.681741514&entry.1482719893&entry.1018422546&entry.2060338072&entry.1052547294&entry.365006055&entry.1323592748=&entry.1534052334=${fullName}`;
    this.mapListComp.load();
  }

  canViewAllMaps() {
    return this.fireAuth.currentUser && (this.fireAuth.currentUser.isAdmin() || this.fireAuth.currentUser.isUpdater());
  }

}
