import { Component, Input, ViewChild, EventEmitter, Inject} from '@angular/core';
import { MapService } from './map.service';
import { Observable } from 'rxjs/Rx';
import { environment } from '../../environments/environment';
import { MdDialog, MdDialogRef, MD_DIALOG_DATA, MdIconRegistry } from '@angular/material';
import { LoadingDialog } from './loading-diag.component';
import * as _ from 'lodash';
import { ActivatedRoute } from '@angular/router';
import { WindowRef } from './windowref.service';
import { BaseComponent } from '../base/base.component';
import { AuthService } from '../user/user.component';
import {DomSanitizer} from '@angular/platform-browser';

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
  heightPadding: number = 50;

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
  onFit = new EventEmitter<any>();

  minimumClusterSize: number = 2;
  mapId: string;
  title: string;
  shortenTitleWidth:number = 1024;
  triggerUpdate: boolean = false;

  addrDlg: MdDialogRef<any>;
  currentAddr: any;
  currentAddrTitle: string;
  currentGmapUrl: string;
  mapStarted: boolean = false;
  currentMap: any;
  showLocation: boolean = false;

  constructor(protected mapService: MapService, dialog: MdDialog, fireAuth: AuthService, private route: ActivatedRoute, private winRef: WindowRef) {
    super();
    this.dialog = dialog;
    this.fireAuth = fireAuth;
    this.requireLogin();
  }

  postLoginSetup() {
    // check the route...
    console.log(this.winRef.nativeWindow.innerHeight);
    this.height = (this.winRef.nativeWindow.innerHeight-this.heightPadding) + 'px';
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

  toggleShowLocation() {
    this.showLocation = !this.showLocation;
    if (this.showLocation) {
      this.showCurrentLoc();
    }
  }

  fitMap() {
    this.onFit.emit({});
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
      // this.mapService.loadMapMarkers(mapBase, this.mapId, true);
      this.loadSingleMap(mapBase);
      return;
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
          this.subs.push(this.onAddressClick.subscribe(data => {
            console.log(data);
            this.currentAddr = data.addrMarker;
            this.showAddrDlg();
          }));
        }
      }
    });
  }

  loadSingleMap(mapBase) {
    this.minimumClusterSize = 200;
    this.subs.push(this.mapService.loadMapMarkersObs(mapBase, this.mapId).subscribe(map => {
      console.log(`Map: `);
      console.log(map);
      this.mapStarted = map.assgnObj.$exists() && !_.isEmpty(map.assgnObj.started);
      this.currentMap = map;

      this.mapService.createMarkersWithStatus(map);
      this.points = this.mapService.mapMarkers;
      this.mapService.trackUpdates = true;

      this.onComplete.emit({});

      if (this.triggerUpdate) {
        this.mapService.triggerUpdate();
      }

      this.title = `${this.mapService.maps[0].terId} - ${this.mapService.maps[0].name}`;
      if (this.winRef.nativeWindow.innerWidth <= this.shortenTitleWidth) {
        this.title = `Map ${this.mapService.maps[0].terId}`;
      }
      this.hideLoadingDialog();
      this.triggerUpdate = true;
      this.subs.push(this.onAddressClick.subscribe(data => {
        console.log(data);

        this.currentAddr = data.addrMarker;
        this.currentAddrTitle = this.getAddressTitle(this.currentAddr.addObj);
        this.currentGmapUrl = this.getGmapUrl(this.currentAddr.addObj);
        this.showAddrDlg();
      }));
    }));
  }

  startMap(mapObj: any) {

  }

  getAddressTitle(addrObj: any) {
    let unit = addrObj.unit;
    if (_.isEmpty(unit) || '9' == `${unit}`) {
      unit = ''
    } else {
      unit = `Unit ${unit}`;
    }
    return `${unit} ${addrObj.hnum} ${addrObj.st}, ${addrObj.burb}`;
  }

  getGmapUrl(addrObj: any) {
    return `https://www.google.com/maps/dir/?api=1&destination=${addrObj.hnum} ${addrObj.st}, ${addrObj.burb}&travelmode=driving`;
  }

  showAddrDlg(){
    console.log(`Opening dialog...`);
    if (this.addrDlg) {
      this.closeAddrDlg();
    }
    this.addrDlg = this.dialog.open(AddressDlgComponent, {
      data: {consumer: this},
      disableClose: true
    });
  }

  closeAddrDlg() {
    console.log(`Closing dialog...`);
    this.addrDlg.close();
    this.addrDlg = null;
  }

  showCurrentLoc() {
    if (navigator.geolocation) {
      navigator.geolocation.watchPosition( pos => {
        this.currentLocation.addObj.clat = pos.coords.latitude;
        this.currentLocation.addObj.clang = pos.coords.longitude;
        console.log(`Curernt position:`);
        console.log(pos.coords);
        if (!this.currentLocation.pushed) {
          this.currentLocation.pushed = true;
          this.points.push(this.currentLocation);
          // this.mapService.triggerUpdate();
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

  isAdmin() {
    return this.fireAuth.currentUser && this.fireAuth.currentUser.isAdmin();
  }

  onStatusChange(item) {

  }

  saveStatus() {
    this.closeAddrDlg();
    this.showLoadingDialog();
    console.log(`Status: ${this.currentAddr.addObj.status}`);
    this.mapService.updateAddrStat(this.currentAddr.mapObj.$key, this.currentAddr.addId, this.currentAddr.addObj.status);
  }

}

@Component({
  selector: 'addr-component',
  templateUrl: './address-dlg.component.html'
})
export class AddressDlgComponent {

  constructor(public dialogRef: MdDialogRef<any>, @Inject(MD_DIALOG_DATA) protected data: any, iconRegistry: MdIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon('google-map',
        sanitizer.bypassSecurityTrustResourceUrl('/assets/images/google-maps.svg'));
  }
}
