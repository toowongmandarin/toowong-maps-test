import { Component, Input, ViewChild, EventEmitter} from '@angular/core';
import { MapService } from './map.service';
import { Observable } from 'rxjs/Rx';
import { environment } from '../../environments/environment';
import { MdDialog, MdDialogRef } from '@angular/material';
import { LoadingDialog } from './loading-diag.component';
import * as _ from 'lodash';
import { ActivatedRoute } from '@angular/router';
import { WindowRef } from './windowref.service';
import { BaseComponent } from '../base/base.component';
import { AuthService } from '../user/user.component';

@Component({
  selector: 'map-component',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent extends BaseComponent {

  currentLocation: any = {
    addObj: {clat: null, clang:null},
    iconUrl: '/assets/images/ic_my_location_red_24px.svg',
    pushed: false
  };
  public points: any = [
  ];
  centerLat: number = -27.5518075;
  centerLng: number = 153.0807544;
  zoom: number = 13;
  height: string = '700px';
  maxWaitTries: number = 20;
  maxWaitCtr: number = 0;
  curPointsCtr: number;
  sameCtr: number = 0;
  sameMax: number = 10;
  checkInterval: number = 1000;
  loadingDialog: any;
  showInfo: boolean = false;
  onToggleShowInfo = new EventEmitter<boolean>();
  onComplete = new EventEmitter<any>();
  onAddressClick = new EventEmitter<any>();

  mapId: string;
  title: string;
  shortenTitleWidth:number = 1024;
  triggerUpdate: boolean = false;
  constructor(protected mapService: MapService, dialog: MdDialog, fireAuth: AuthService, private route: ActivatedRoute, private winRef: WindowRef) {
    super();
    this.dialog = dialog;
    this.fireAuth = fireAuth;
    this.requireLogin();
  }

  postLoginSetup() {
    // check the route...
    console.log(this.winRef.nativeWindow.innerHeight);
    this.height = (this.winRef.nativeWindow.innerHeight-180) + 'px';
    this.title = 'Loading...';
    this.subs.push(this.route.params.subscribe(params => {
      this.mapId = params['id'];
      this.loadMaps();
    }));
  }

  ngOnDestroy() {
    this.clearMaps();
    this.unsubscribeAll();
  }

  toggleShowInfo() {
    this.showInfo = !this.showInfo;
    console.log(`Emitting: ${this.showInfo}`);
    this.onToggleShowInfo.emit(this.showInfo);
  }

  loadMaps() {
    if (!_.isEmpty(this.points)) {
      console.log(`Maps already loaded`);
      return;
    }
    const mapBase = environment.app.mapBase;
    // this.showCurrentLoc();
    this.showLoadingDialog();
    if (this.mapId == 'all') {
      this.mapService.loadAllMapsWithMarkers(mapBase);
    } else {
      this.mapService.loadMapMarkers(mapBase, this.mapId, true);
    }

    const subs = Observable.interval(this.checkInterval).subscribe(n=>{
      if (this.mapService.mapMarkers.length != this.curPointsCtr) {
        this.curPointsCtr = this.mapService.mapMarkers.length;
        this.sameCtr = 0;
      } else {
        this.maxWaitCtr++;
        this.sameCtr++;
        if (this.maxWaitCtr > this.maxWaitTries || this.sameCtr > this.sameMax) {
          console.log(`Got all addresses, rendering...`);
          console.log(`Total no. maps: ${this.mapService.maps.length}`);
          console.log(`Total no. of addresses: ${this.mapService.mapMarkers.length}`);
          this.points = this.mapService.mapMarkers;
          subs.unsubscribe();
          this.hideLoadingDialog();
          this.mapService.trackUpdates = true;
          this.onComplete.emit({});
          if (this.triggerUpdate)
            this.mapService.triggerUpdate();
          if (this.mapService.maps.length > 1) {
            if (this.mapId == 'all') {
              this.title = 'All Maps';
            } else {
              // TODO: decide what the title
            }
          } else {
            this.title = `${this.mapService.maps[0].terId} - ${this.mapService.maps[0].name}`;
            if (this.winRef.nativeWindow.innerWidth <= this.shortenTitleWidth) {
              this.title = `Map ${this.mapService.maps[0].terId}`;
            }
          }
          this.subs.push(this.onAddressClick.subscribe(this.addressClicked));
        }
      }
    });
  }

  addressClicked(data: any){
    console.log(`Addresss clicked!`);
    console.log(data);
  }

  showCurrentLoc() {
    if (navigator.geolocation) {
      navigator.geolocation.watchPosition( pos => {
        this.currentLocation.addObj.clat = pos.coords.latitude;
        this.currentLocation.addObj.clang = pos.coords.longitude;
        if (!this.currentLocation.pushed) {
          this.currentLocation.pushed = true;
          this.points.push(this.currentLocation);
        }
      }, error => {
          console.error(error);
      });
    }
  }

  clearMaps() {
    this.mapService.clearAllMarkers();
    this.currentLocation.pushed = false;
  }

  showMarker() {
    this.clearMaps();
  }

  logout() {
    this.clearMaps();
    super.logout();
    this.triggerUpdate = true;
  }
}
