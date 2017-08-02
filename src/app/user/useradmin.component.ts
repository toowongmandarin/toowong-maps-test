import { Component } from '@angular/core';
import { AuthService } from './user.component';
import { BaseComponent } from '../base/base.component';
import * as _ from 'lodash';
@Component({
  selector: 'useradmin',
  templateUrl: './useradmin.component.html'
})
export class UserAdmminComponent extends BaseComponent {
  user: any;

  constructor(protected fireAuth: AuthService) {
    super();
    this.requireLogin();
  }

  postLoginSetup() {
    
  }
}
