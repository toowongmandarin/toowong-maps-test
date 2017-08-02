import { Component } from '@angular/core';
import { AuthService } from './user.component';
import { BaseComponent } from '../base/base.component';
import * as _ from 'lodash';

@Component({
  selector: 'userinfo',
  templateUrl: './userinfo.component.html'
})
export class UserInfoComponent extends BaseComponent {
  user: any;
  subs: any[] = [];
  constructor(protected fireAuth: AuthService) {
    super();
  }

  ngOnInit() {
    this.user = this.fireAuth.currentUser;
    this.subs.push(this.fireAuth.onCurrentUserInfo.subscribe(user => {
      this.user = this.fireAuth.currentUser;
      console.log(`User info:`);
      console.log(this.user);
    }));
  }

}
