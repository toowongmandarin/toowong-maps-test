import { Component,ViewChild, Inject } from '@angular/core';
import { AuthService, MapsUser } from '../user/user.component';
import { MapComponent } from '../map/map.component';
import { MatDialog, MatDialogRef, MatIconRegistry, MAT_DIALOG_DATA } from '@angular/material';
import { MapsListComponent } from '../map/mapslist.component';
import { BaseComponent } from '../base/base.component';
import {DomSanitizer} from '@angular/platform-browser';
import { environment } from '../../environments/environment';

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
  appTitle: string = `${environment.app.title} ${environment.version.current}`;

  constructor(fireAuth: AuthService, dialog: MatDialog, iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
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
    this.addUrl = `https://docs.google.com/forms/d/e/1FAIpQLScYHfYNwnSIWAL9RAH3rEPC74WfkFT0FgcvaJKx1nAIROXS6A/viewform?usp=pp_url&entry.1810388592=Yes&entry.1189370340=&entry.45257833&entry.681741514=&entry.1482719893=&entry.1683213160=%E6%98%AF&entry.293956968=&entry.602343366&entry.2071713990=&entry.138422963=&entry.1018422546&entry.2060338072&entry.1052547294&entry.365006055&entry.1323592748=&entry.1534052334=${fullName}&entry.1011916189&entry.1303192619&entry.825337910&entry.1931492709&entry.2023645450=&entry.913416032=${fullName}`;
    // this.addUrl = `https://docs.google.com/forms/d/e/1FAIpQLScYHfYNwnSIWAL9RAH3rEPC74WfkFT0FgcvaJKx1nAIROXS6A/viewform?usp=pp_url&entry.1810388592=Yes&entry.1189370340&entry.45257833&entry.681741514&entry.1482719893&entry.1018422546&entry.2060338072&entry.1052547294&entry.365006055&entry.1323592748=&entry.1534052334=${fullName}`;
    this.mapListComp.load();
  }

  canViewAllMaps() {
    return this.fireAuth.currentUser && (this.fireAuth.currentUser.isAdmin() || this.fireAuth.currentUser.isUpdater());
  }

}

@Component({
  selector: 'notify-dlg',
  templateUrl: './notify-dlg.component.html'
})
export class NotifyDlgComponent {
  constructor(public dialogRef: MatDialogRef<any>, @Inject(MAT_DIALOG_DATA) public data: any) {
  }
}
