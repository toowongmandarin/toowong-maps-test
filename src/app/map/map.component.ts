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
    // iconUrl: '/assets/images/ic_my_location_red_24px.svg',
    iconUrl: '/assets/images/my_location_1.svg',
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
  onAddLocMarker = new EventEmitter<any>();
  onFit = new EventEmitter<any>();

  minimumClusterSize: number = 2;
  mapId: string;
  title: string;
  shortenTitleWidth:number = 1024;
  triggerUpdate: boolean = false;

  addrDlg: MdDialogRef<any>;
  addrListDlg: MdDialogRef<any>;

  currentAddr: any;
  currentAddrTitle: string;
  currentGmapUrl: string;
  mapStarted: boolean = false;
  currentMap: any;
  showLocation: boolean = false;
  selectedAddObj: any;
  addrStatuses: any;
  locationSearching: boolean = false;
  locationWatch: any;
  currentFeedbackUrl: string;

  addUrl: string;

  constructor(public mapService: MapService, dialog: MdDialog, fireAuth: AuthService, private route: ActivatedRoute, public winRef: WindowRef, iconRegistry: MdIconRegistry, sanitizer: DomSanitizer) {
    super();
    this.dialog = dialog;
    this.fireAuth = fireAuth;
    winRef.redirHttps();
    this.requireLogin();
    iconRegistry.addSvgIcon('fit-map',
        sanitizer.bypassSecurityTrustResourceUrl('/assets/images/fitmap.svg'));
    iconRegistry.addSvgIcon('add-address',
        sanitizer.bypassSecurityTrustResourceUrl('/assets/images/add_address.svg'));
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
    } else {
      if (navigator.geolocation) {
        navigator.geolocation.clearWatch(this.locationWatch);
        this.onAddLocMarker.emit(null);
      }
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
      // console.log(`Map: `);
      // console.log(map);
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
      const fullName = (this.fireAuth.currentUser && this.fireAuth.currentUser.userInfoObj) ? this.fireAuth.currentUser.userInfoObj.name : '';
      const terId = this.mapService.maps[0].terId;
      this.addUrl = `https://docs.google.com/forms/d/e/1FAIpQLScYHfYNwnSIWAL9RAH3rEPC74WfkFT0FgcvaJKx1nAIROXS6A/viewform?usp=pp_url&entry.1810388592=Yes&entry.1189370340=&entry.45257833&entry.681741514=${terId}&entry.1482719893=${fullName}&entry.1683213160=%E6%98%AF&entry.293956968=&entry.602343366&entry.2071713990=${terId}&entry.138422963=${fullName}&entry.1018422546&entry.2060338072&entry.1052547294&entry.365006055&entry.1323592748=${terId}&entry.1534052334=${fullName}&entry.1011916189&entry.1303192619&entry.825337910&entry.1931492709&entry.2023645450=${terId}&entry.913416032=${fullName}`;
      // this.addUrl = `https://docs.google.com/forms/d/e/1FAIpQLScYHfYNwnSIWAL9RAH3rEPC74WfkFT0FgcvaJKx1nAIROXS6A/viewform?usp=pp_url&entry.1810388592=Yes&entry.1189370340&entry.45257833&entry.681741514&entry.1482719893&entry.1018422546&entry.2060338072&entry.1052547294&entry.365006055&entry.1323592748=${this.mapService.maps[0].terId}&entry.1534052334=${fullName}`;
      this.hideLoadingDialog();
      this.triggerUpdate = true;
      this.subs.push(this.onAddressClick.subscribe(data => {
        console.log(data);

        this.currentAddr = data.addrMarker;
        if (this.hasMultiAdds()) {
          this.currentAddrTitle = "Multiple addresses, select one below.";
          this.currentGmapUrl = null;
          this.selectedAddObj = null;
        } else {
          this.currentAddrTitle = this.getAddressTitle(this.currentAddr.addObj);
          this.currentGmapUrl = this.getGmapUrl(this.currentAddr.addObj);
          this.selectedAddObj = this.currentAddr.addObj;
          if (_.isUndefined(this.selectedAddObj.status)) {
            this.selectedAddObj.status = 0;
          }
          this.buildFeedbackUrl();
        }
        this.showAddrDlg();
      }));
    }));
  }

  startMap(mapObj: any) {

  }

  isNotAtHome() {
    return this.currentAddr && this.currentAddr.map.getStatus(this.currentAddr.addId) == 3;
  }

  hasDetail() {
    return this.currentAddr && this.currentAddr.map.getStatusDetail(this.currentAddr.addId);
  }

  getLastVisited() {
    const detail = this.currentAddr.map.getStatusDetail(this.currentAddr.addId);
    if (detail) {
      return detail.nh_when;
    }
    return null;
  }

  getAddressTitle(addrObj: any) {
    let unit = addrObj.unit;
    if (_.isUndefined(unit) || !unit || '-9' == `${unit}`) {
      unit = ''
    } else {
      unit = `${unit}/`;
    }
    return `${unit}${addrObj.hnum} ${addrObj.st}, ${addrObj.burb}`;
  }

  getGmapUrl(addrObj: any) {
    return `https://www.google.com/maps/dir/?api=1&destination=${addrObj.hnum} ${addrObj.st}, ${addrObj.burb}&travelmode=driving`;
  }

  getStatuses() {
    if (!this.addrStatuses) {
      if (this.fireAuth.currentUser.isAdmin() || this.fireAuth.currentUser.isUpdater()) {
        this.addrStatuses = this.mapService.addrStatuses;
      } else {
        this.addrStatuses = [];
         _.forEach(this.mapService.addrStatuses, stat => {
          if (stat.val != 5 && stat.val != 7) {
            this.addrStatuses.push(stat);
          }
        });
      }
    }
  }

  showAddrDlg(){
    this.getStatuses();
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
    // this.addrDlg.close();
    this.dialog.closeAll();
    this.addrDlg = null;
  }

  cancelAddrDlg() {
    this.selectedAddObj = null;
    this.closeAddrDlg();
  }

  showCurrentLoc() {
    if (navigator.geolocation) {
      this.locationSearching = true;
      this.locationWatch = navigator.geolocation.watchPosition( pos => {
        console.log(`Curernt position:`);
        console.log(pos.coords);
        if (this.locationSearching) {
          this.locationSearching = false;
        }
        this.onAddLocMarker.emit({
          position: {lat: pos.coords.latitude, lng: pos.coords.longitude},
          iconUrl: this.currentLocation.iconUrl
        });
        // this.currentLocation.addObj.clat = pos.coords.latitude;
        // this.currentLocation.addObj.clang = pos.coords.longitude;
        //
        // if (!this.currentLocation.pushed) {
        //   this.currentLocation.pushed = true;
        //   // this.points.push(this.currentLocation);
        //   // this.mapService.triggerUpdate();
        // }
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

  isUpdater() {
    return this.fireAuth.currentUser && (this.fireAuth.currentUser.isAdmin() || this.fireAuth.currentUser.isUpdater() );
  }

  onStatusChange(item) {

  }

  saveStatus() {
    const mapId = this.currentAddr.mapObj.$key;
    const addId = this.selectedAddObj.$key;
    const status = this.selectedAddObj.status;
    const ctr = this.selectedAddObj
    this.closeAddrDlg();
    this.showLoadingDialog();
    console.log(`Status: ${status}`);
    this.mapService.updateAddrStat(mapId, addId, status, this.fireAuth.currentUser, (addId, status, nhData) => {
      console.log(`Manulaly setting Status: ${status}`);
      this.currentAddr.map.setStatus(addId, status);
      this.currentAddr.map.setStatusDetail(addId, nhData);
      this.selectedAddObj = null;
    });
  }

  hasMultiAdds() {
    return _.isArray(this.currentAddr.addObj) && !this.selectedAddObj;
  }

  selectAdd(addObj) {
    this.currentAddrTitle = this.getAddressTitle(addObj);
    this.currentGmapUrl = this.getGmapUrl(addObj);
    this.selectedAddObj = addObj;
    this.buildFeedbackUrl();
  }

  buildFeedbackUrl() {
    const fullName = (this.fireAuth.currentUser && this.fireAuth.currentUser.userInfoObj) ? this.fireAuth.currentUser.userInfoObj.name : '';
    const terId = this.mapService.maps[0].terId;
    this.currentFeedbackUrl = `https://docs.google.com/forms/d/e/1FAIpQLScYHfYNwnSIWAL9RAH3rEPC74WfkFT0FgcvaJKx1nAIROXS6A/viewform?usp=pp_url&entry.1810388592=No&entry.1189370340=${this.currentAddrTitle}&entry.45257833&entry.681741514=${terId}&entry.1482719893=${fullName}&entry.1683213160=%E4%B8%8D%E6%98%AF&entry.293956968=${this.currentAddrTitle}&entry.602343366&entry.2071713990=${terId}&entry.138422963=${fullName}&entry.1018422546&entry.2060338072&entry.1052547294&entry.365006055&entry.1323592748=${terId}&entry.1534052334=${fullName}&entry.1011916189&entry.1303192619&entry.825337910&entry.1931492709&entry.2023645450=${terId}&entry.913416032=${fullName}`;
    // this.currentFeedbackUrl = `https://docs.google.com/forms/d/e/1FAIpQLScYHfYNwnSIWAL9RAH3rEPC74WfkFT0FgcvaJKx1nAIROXS6A/viewform?usp=pp_url&entry.1810388592=No&entry.1189370340=${this.currentAddrTitle}&entry.45257833&entry.681741514=${this.mapService.maps[0].terId}&entry.1482719893=${fullName}&entry.1018422546&entry.2060338072&entry.1052547294&entry.365006055&entry.1323592748&entry.1534052334`
  }

  viewList() {
    this.getStatuses();

      this.addrListDlg = this.dialog.open(AddressListDlgComponent, {
        data: {consumer: this},
        disableClose: true
      });

  }

  closeAddrListDlg() {
    this.addrListDlg.close();
    // this.addrListDlg = null;
  }

  getAddressTitleWithStatus(addObj) {
    let title = this.getAddressTitle(addObj);
    if (addObj.status) {
      title = `${this.getStatusLabel(addObj.status)} - ${title}`
    }
    return title;
  }

  getStatusLabel(addObj) {
    let label = 'Not Done';
    if (!_.isUndefined(addObj.status)) {
      _.forEach(this.addrStatuses, stat => {
        if (addObj.status == stat.val) {
          label = stat.label;
        }
      });
    }
    return label;
  }

  getStatusBgColor(addObj) {
    let bg = "#960202";
    if (!_.isUndefined(addObj.status)) {
      switch(addObj.status) {
        case 1:
          bg = "#428214";
          break;
        case 2:
          bg = "#401804";
          break;
        case 3:
          bg = "#e88017";
          break;
        case 4:
          bg = "#8d57c2";
          break;
        case 5:
          bg = "#4a5963";
          break;
        case 7:
          bg = "#227874";
          break;
        case 8:
          bg = "#227874";
          break;
      }
    }
    return bg;
  }
}

@Component({
  selector: 'addr-component',
  templateUrl: './address-dlg.component.html'
})
export class AddressDlgComponent {

  constructor(public dialogRef: MdDialogRef<any>, @Inject(MD_DIALOG_DATA) public data: any, iconRegistry: MdIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon('google-map',
        sanitizer.bypassSecurityTrustResourceUrl('/assets/images/google-maps.svg'));
    iconRegistry.addSvgIcon('edit-address',
        sanitizer.bypassSecurityTrustResourceUrl('/assets/images/edit_address.svg'));
  }
}

@Component({
  selector: 'addrlist-component',
  templateUrl: './addresslist-dlg.component.html'
})
export class AddressListDlgComponent {

  constructor(public dialogRef: MdDialogRef<any>, @Inject(MD_DIALOG_DATA) public data: any, iconRegistry: MdIconRegistry, sanitizer: DomSanitizer) {
  }
}
