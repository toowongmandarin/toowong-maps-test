import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable()
export class FireAuthService {

  constructor(public af: AngularFireAuth) {
  }

  getUser(): Observable<firebase.User> {
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
}
