import { Component,ViewChild } from '@angular/core';
import { FireAuthService } from '../fire/fire.component';
import { MapComponent } from '../map/map.component';
import { MdDialog, MdDialogRef } from '@angular/material';
import { LoginComponent } from './login.component';

@Component({
  selector: 'home-component',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  user: any;
  errorMsg: string;
  @ViewChild('mapComponent')
  private mapComp: MapComponent;
  loginDiag: MdDialogRef<any>;

  constructor(protected fireAuth: FireAuthService, protected dialog: MdDialog) {
    this.user = this.fireAuth.getUser();
    this.errorMsg = this.user ? "" : "Please login.";
    this.fireAuth.onAuthChange(user => {
      console.log(`Auth state change:`);
      console.log(user);
      this.user = user;
      if (user) {
        if (this.loginDiag) {
          this.loginDiag.close();
        }
        this.mapComp.loadMaps();
      } else {
        this.loginDiag = this.dialog.open(LoginComponent, {data: {consumer: this}, disableClose: true});
      }
    });
  }

  login(creds) {
    this.errorMsg = "";
    console.log(`Home component logging in: `);
    console.log(creds);
    this.fireAuth.login(creds.email, creds.password).then(user => {
      this.user = user;
    }).catch(error => {
      // Handle Errors here.
      console.log(error);
      const errorMessage = error.message;
      this.errorMsg = errorMessage;
    });
  }

  logout() {
    this.mapComp.clearMaps();
    this.fireAuth.logout();
  }
}
