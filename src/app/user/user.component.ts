import { Injectable, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase/app';
import * as _ from "lodash";

export class MapsUser {
  userInfoObj: any;
  userObj: firebase.User;
  roles: any;

  isAdmin():boolean {
    return this.roles && this.roles.admin == true;
  }

  isUpdater(): boolean {
    return this.roles && this.roles.updater == true;
  }

  isFsgOverseer(): boolean {
    return this.roles && this.roles.fsgoverseer == true;
  }

  isPublisher(): boolean {
    return this.roles && this.roles.publisher == true;
  }

  get hasUserInfo() {
    return this.roles && this.userInfoObj;
  }
}

@Injectable()
export class AuthService {
  roleList:string[] = ['admin', 'updater', 'fsgoverseer', 'publisher'];
  currentUser: MapsUser;
  @Output() onCurrentUserInfo = new EventEmitter<any>();
  usersList: any;

  constructor(public af: AngularFireAuth, protected db: AngularFireDatabase) {
  }

  getUser(): firebase.User {
    return this.af.auth.currentUser;
  }

  getUserObs(): Observable<firebase.User> {
    return this.af.authState;
  }

  isLoggedIn() {
    return this.getUser() != null;
  }

  onAuthChange(method) {
    this.af.auth.onAuthStateChanged(method);
  }

  login(username, password): firebase.Promise<firebase.User> {
    return this.af.auth.signInWithEmailAndPassword(username, password);
  }

  logout() {
    return this.af.auth.signOut();
  }

  getUserRole(user: MapsUser): Observable<any> {
    return this.db.object(`/roles/${user.userObj.uid}`).flatMap((rolesObj: any) => {
      user.roles = rolesObj;
      return Observable.of(user);
    });
  }

  getUserInfo(user: MapsUser): Observable<any> {
    return this.db.object(`/users/${user.userObj.uid}`).flatMap((userInfoObj: any) => {
      user.userInfoObj = userInfoObj;
      return Observable.of(user);
    });
  }

  getAllUserInfo() {
    this.currentUser = new MapsUser();
    this.currentUser.userObj = this.getUser();
    this.getUserRole(this.currentUser)
    .flatMap(user => {
      // retrieve the user object...
      return this.getUserInfo(this.currentUser);
    })
    .subscribe(user => {
      // console.log(`Emitting...`);
      // console.log(this.currentUser);
      this.onCurrentUserInfo.emit(this.currentUser);
    });
  }

  getAllUsersList(): Observable<any> {
    if (this.usersList) {
      return Observable.of(this.usersList);
    } else {
      return this.db.list(`/users/list`).flatMap(userIdList => {
        if (this.usersList) {
          this.usersList.length = 0;
        } else {
          this.usersList = [];
        }
        return Observable.from(userIdList);
      })
      .flatMap((userId:any) => {
        return this.db.object(`/users/${userId.$value}`).flatMap(userObj => {
          _.remove(this.usersList, (e) => { return e.$key == userObj.$key} );
          this.usersList.push(userObj);
          return Observable.of(userObj);
        });
      })
      .debounceTime(300)
      .flatMap(whatever => {
        return Observable.of(this.usersList);
      });
    }
  }

  sendPasswordReset(email: string, cb:any=null) {
    this.af.auth.sendPasswordResetEmail(email).then(()=> {
      if (cb) cb();
    });
  }

  createUser(name: string, email: string, role: string) {
    this.db.object(`/users/requests/pending/createUser/${Date.now()}`).update({name: name, email: email, role: role});
  }

}
