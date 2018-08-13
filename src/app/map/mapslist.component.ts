import { Component, Input, ViewChild, EventEmitter } from '@angular/core';
import { MapService, Fsg, Map } from './map.service';
import { Observable } from 'rxjs/Rx';
import { environment } from '../../environments/environment';
import { MatDialog, MatDialogRef } from '@angular/material';
import { LoadingDialog } from './loading-diag.component';
import { BaseComponent } from '../base/base.component';
import { AuthService, MapsUser } from '../user/user.component';
import { WindowRef } from './windowref.service';
import moment from 'moment-es6';
import * as _ from 'lodash';

@Component({
  selector: 'mapslist-component',
  templateUrl: './mapslist.component.html',
  styleUrls: ['./mapslist.component.css']
})
export class MapsListComponent extends BaseComponent {
  loadingDialog: any;
  fsgMaps: Fsg[];
  loaded: boolean = false;
  hasMaps: boolean = false;
  oldFsgMaps: Fsg[];
  metadata: any;

  constructor(dialog: MatDialog, fireAuth: AuthService, public mapService: MapService, public winRef: WindowRef) {
    super();
    this.dialog = dialog;
    this.fireAuth = fireAuth;
    winRef.redirHttps();
  }

  public load() {
    this.showLoadingDialog();
    this.mapService.getMetadata().subscribe(meta => {
      this.metadata = meta;
      if (this.fireAuth.currentUser.isAdmin() || this.fireAuth.currentUser.isUpdater()) {
        // load all if an admin...
        console.log(`Loading current maps...`);
        this.getAllMapsList();
      } else {
        // load all assigned maps...
        if (this.fireAuth.currentUser.isFsgAssistant()) {
          this.getFsgMaps();
        } else {
          this.getAllUserMaps();
        }
      }
      this.loadPreferences();
      // pre-load the user list...
      this.subs.push(this.fireAuth.getAllUsersList().subscribe(userList => {
        console.log(`User list pre-loaded..`);
      }));
    });
  }

  public getOverallCompletion() {
    if (this.metadata.mode.campaign) {
      return this.metadata.report.campaign.currentCompletion;
    } else {
      return this.metadata.report.regular.currentCompletion;
    }
  }

  public getMapCount() {
    if (this.metadata.mode.campaign) {
      return this.metadata.report.campaign.mapCount;
    } else {
      return this.metadata.report.regular.mapCount;
    }
  }

  public getCompletionReport() {
    if (this.metadata.mode.campaign) {
      return this.metadata.report.campaign;
    } else {
      return this.metadata.report.regular;
    }
  }

  protected getFsgMaps() {
    _.forOwn(this.fireAuth.currentUser.roles.fsg, (flag, fsgName) => {

    });
  }

  protected getAllUserMaps() {
    // maps listing depend on roles...
    console.log(`Getting all user maps...`);
    this.subs.push(this.mapService.getUserMaps(this.fireAuth.currentUser).subscribe(fsgMaps => {
      console.log(`Got all user maps...`);
      // remove all maps not shared....
      _.forEach(fsgMaps, (fsg, idx) => {
        _.remove(fsg.maps, map => {
          return !map.isUser(this.fireAuth.currentUser);
        });
        if (fsg.maps.length == 0 && fsgMaps.length > 0) {
          fsgMaps.splice(idx, 1);
        }
        if (this.fsgMaps) {
          const fsgMatch = _.find(this.fsgMaps, fsgM => {
            return fsg.fsgName == fsgM.fsgName;
          });
          if (fsgMatch) {
            console.log(`Match found:::`);
            console.log(fsgMatch);
            console.log(fsg);
            fsgMatch.metadata = fsg.metadata;
            fsgMatch.maps = fsg.maps;
            fsgMatch.completedMapsCtr = fsg.completedMapsCtr;
            fsgMatch.completionRate = fsg.completionRate;
          }
        }

      });
      this.hasMaps = fsgMaps && fsgMaps.length > 0;

      // if (!this.hasMaps) {
      //   this.oldFsgMaps = [];
      //   this.fsgMaps = [];
      // }
      // if (this.oldFsgMaps) {
      //   _.forEach(this.oldFsgMaps, (fsgMap) => {
      //     const currentFsg = _.find(this.fsgMaps, (curFsg) => {
      //       return curFsg.fsgName == fsgMap.fsgName
      //     });
      //     if (currentFsg) {
      //       currentFsg.expanded = fsgMap.expanded;
      //     }
      //   });
      // }
      // this.oldFsgMaps = this.fsgMaps;
      if (!this.fsgMaps) {
        this.fsgMaps = fsgMaps;
      }

      this.hideLoadingDialog();
    }));
  }

  getFsgName(fsg) {
    if (fsg.fsgName != 'Your Maps') {
      return `${fsg.fsgName} ${ this.mapService.fsgHasCompletion(fsg.fsgName) ? `- ${fsg.getCompletionPercent()}%` : ''}`;
    }
    return fsg.fsgName;
  }

  protected getAllMapsList() {
    // maps listing depend on roles...
    console.log(`Getting all maps...`);
    this.hasMaps = true;
    if (this.fireAuth.currentUser.isAdmin() || this.fireAuth.currentUser.isUpdater()) {
      this.subs.push(this.mapService.getAllFsgMapsList(true).flatMap(fsgMaps => {
        _.each(fsgMaps, (fsg) => {
          fsg.computeCompleted();
        });
        this.fsgMaps = fsgMaps;
        console.log("All maps:")
        console.log(fsgMaps);
        return this.mapService.getUserMaps(this.fireAuth.currentUser);
      })
      .subscribe(userMaps => {
        // console.log(`User maps:`);
        // console.log(userMaps);

        if (this.fsgMaps.length > 0 && userMaps.length > 0) {
          // check if we need to add the "Your Maps"...
          const userFsg = _.find(this.fsgMaps, (curFsg) => {
            return curFsg.fsgName == userMaps[0].fsgName;
          });
          if (!userFsg) {
            this.fsgMaps = userMaps.concat(this.fsgMaps);
          }
        }

        // if (this.oldFsgMaps) {
        //   // record the last diag open...
        //   _.forEach(this.oldFsgMaps, (fsgMap) => {
        //     // console.log(`Old:`);
        //     // console.log(fsgMap);
        //     const currentFsg = _.find(this.fsgMaps, (curFsg) => {
        //       return curFsg.fsgName == fsgMap.fsgName
        //     });
        //     if (currentFsg) {
        //       // console.log(`Set expanded state.`);
        //       currentFsg.expanded = fsgMap.expanded;
        //     }
        //   });
        // }
        // this.oldFsgMaps = this.fsgMaps;
        this.hideLoadingDialog();
      }));
    }
  }

  getMapUsers(map: Map) {
    let userList = '';
    _.forEach(map.getUsersList(), entry => {
      userList = `${_.isEmpty(userList) ? userList: userList + ', '}${entry.name}`;
    });
    return userList;
  }

  public toggleExpand(fsg, expanded) {
    fsg.expanded = expanded;
  }

  canOpenMap(map) {
    // if (this.fireAuth.currentUser) {
    //   console.log(map.isUser(this.fireAuth.currentUser) || this.fireAuth.currentUser.isAdmin() || this.fireAuth.currentUser.isUpdater());
    // }
    return this.fireAuth.currentUser
      && (map.isUser(this.fireAuth.currentUser) || this.fireAuth.currentUser.isAdmin() || this.fireAuth.currentUser.isUpdater());
  }

  getCompletionPercentage(map: Map) {
    return this.mapService.getCompletionPercentage(map);
  }

  getRemaining(map: Map) {
    return this.mapService.getRemainingAddresses(map);
  }

  isUpdater() {
    return this.fireAuth.currentUser &&  ( this.fireAuth.currentUser.isAdmin() || this.fireAuth.currentUser.isUpdater());
  }

  getBg(expireDate, isNormalMode) {
    const today = moment();
    const expireMoment = moment(expireDate);
    const criticalMoment = moment().add(3, 'days');
    const soonMoment = moment().add(6, 'days');
    if (today.isSameOrAfter(expireMoment) || today.isBetween(criticalMoment, expireMoment, null, '[]')) {
      return "pink";
    }
    if (today.isBetween(soonMoment, expireMoment, null, '[]')) {
      return "yellow";
    }
    return "lightgray";
  }

  getBgMap(map) {
    let doneCtr = map.mapObj.doneCtr;
    if (!this.isNormalMode()) {
      doneCtr = map.mapObj.campaignCtr;
    }
    if (doneCtr > 0) {
      return "lightgray";
    }
    return "white";
  }

  isNormalMode() {
    return this.mapService.isNormalMode();
  }

  loadPreferences() {
    this.fireAuth.getUserInfo(this.fireAuth.currentUser).subscribe(user => {
      if (user.userInfoObj.geo) {
        const geoLocEmitter = new EventEmitter<any>();
        let lastSaved = null;
        geoLocEmitter.subscribe(pos => {
          const now = moment();
          if (lastSaved != null && now.isBefore(lastSaved.add(1, 'minute'))) {
            return;
          }
          lastSaved = now;
          this.fireAuth.saveLoc(this.fireAuth.currentUser.userObj.uid, pos);
        });
        this.mapService.enableGeolocation(geoLocEmitter);
      }
      this.fireAuth.saveOnlineStat(this.fireAuth.currentUser);
    });
  }

}
