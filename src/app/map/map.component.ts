import { Component, Input, ViewChild, EventEmitter, Inject, ElementRef} from '@angular/core';
import { MapService } from './map.service';
import { Observable } from 'rxjs/Rx';
import { environment } from '../../environments/environment';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatIconRegistry } from '@angular/material';
import { LoadingDialog } from './loading-diag.component';
import * as _ from 'lodash';
import { ActivatedRoute } from '@angular/router';
import { WindowRef } from './windowref.service';
import { BaseComponent } from '../base/base.component';
import { AuthService } from '../user/user.component';
import {DomSanitizer} from '@angular/platform-browser';
import { NotifyDlgComponent } from '../ui/home.component';
import moment from 'moment-es6';

@Component({
  selector: 'map-component',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent extends BaseComponent {
  @ViewChild('markerCluster') public markerClusterRef: ElementRef;

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
  numHeight: number;
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
  onPosMarker = new EventEmitter<any>();
  onFit = new EventEmitter<any>();

  minimumClusterSize: number = 2;
  mapId: string;
  title: string;
  shortenTitleWidth:number = 1024;
  triggerUpdate: boolean = false;

  addrDlg: MatDialogRef<any>;
  addrListDlg: MatDialogRef<any>;

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
  currentAddrList: any;

  addUrl: string;
  notifyDlg: any;
  editMode: string;
  EDIT_MODE_STATUS: string = 'editStatus';
  EDIT_MODE_ADDRESS:string = 'editAddress';
  EDIT_MODE_MOVE_ADDRESS: string = 'moveAddress';
  statusCache:any[] = [];
  ADDRESS_UNSELECTED_ICON: string = '/assets/images/place-markers/home-unselected.svg';
  ADDRESS_SELECTED_ICON: string = '/assets/images/place-markers/home-selected.svg';
  selectedAddrMarkers:any[] = [];
  selectedAddresses:any[] = [];
  lastSelectedAddress: any = null;
  findMapId: any = null;
  targetMapId: any = null;
  targetMapObj: any = null;

  mapName: string;
  fsgName: string;
  fsgs: string[];
  mapEditDlg: any;
  mapKey: any;
  mapBin = {};
  mapIds = [];

  constructor(public mapService: MapService, dialog: MatDialog, fireAuth: AuthService, private route: ActivatedRoute, public winRef: WindowRef, iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    super();
    this.dialog = dialog;
    this.fireAuth = fireAuth;
    winRef.redirHttps();
    this.requireLogin();
    iconRegistry.addSvgIcon('fit-map',
        sanitizer.bypassSecurityTrustResourceUrl('/assets/images/fitmap.svg'));
    iconRegistry.addSvgIcon('add-address',
        sanitizer.bypassSecurityTrustResourceUrl('/assets/images/add_address.svg'));
    this.editMode = this.EDIT_MODE_STATUS;
  }

  setEditingAddress() {
    this.editMode = this.EDIT_MODE_ADDRESS;
  }

  isEditModeAddress() {
    return this.editMode == this.EDIT_MODE_ADDRESS;
  }

  setEditModeMoveAddress() {
    this.editMode = this.EDIT_MODE_MOVE_ADDRESS;
  }

  isEditModeMoveAddress() {
    return this.editMode == this.EDIT_MODE_MOVE_ADDRESS;
  }

  setEditingStatus() {
    this.editMode = this.EDIT_MODE_STATUS;
  }

  isEditStatus() {
    return this.editMode == this.EDIT_MODE_STATUS;
  }

  adjustHeight() {
    this.numHeight = (this.winRef.nativeWindow.innerHeight-this.heightPadding);
    this.height = this.numHeight + 'px';
  }

  postLoginSetup() {
    // check the route...
    console.log(this.winRef.nativeWindow.innerHeight);
    this.adjustHeight();
    if (!this.mapId) {
      this.title = 'Loading...';
      this.subs.push(this.route.params.subscribe(params => {
        this.mapId = params['id'];
        this.mapService.getMetadata().subscribe(meta => {
          this.loadMaps();
          this.loadPreferences();
        });
      }));
    } else {
      console.log(`Post login set up triggered, already loaded, doing nothing.`);
    }
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
      this.mapService.disableGeolocation(this.onPosMarker);
    }
  }

  fitMap() {
    this.onFit.emit({});
  }

  accessDenied() {
    this.title = "Access Denied";
    this.hideLoadingDialog();
    this.notifyDlg = this.dialog.open(NotifyDlgComponent, {
      data: {consumer: this, title: "Access denied", subtitle: "You don't have privileges to access this page. If you think you should have access, please contact the administrator.", confirmText: "Go Home"},
      disableClose: true
    });
  }

  confirmNotification() {
    this.notifyDlg.close();
    this.winRef.location('/home');
  }

  saveAddressEdit() {
    this.mapService.saveAddr(this.selectedAddObj, this.mapId == 'all' ? null : this.currentMap, null, ()=> {
      this.selectedAddObj = null;
      this.closeAddrDlg();
      this.resetEditMode();
    });
  }

  startMoveAddressMode() {
    this.setEditModeMoveAddress();
    _.each(this.points, (point)=> {
      this.statusCache.push(point.marker.icon.url);
      point.marker.icon.url = this.ADDRESS_UNSELECTED_ICON;
    });
    this.mapService.triggerUpdate();
  }

  stopMoveAddressMode() {
    this.resetEditMode();
    _.each(this.points, (point, idx) => {
      point.marker.icon.url = this.statusCache[idx];
    });
    this.statusCache = [];
    this.selectedAddresses = [];
    this.selectedAddrMarkers = [];
    this.mapService.triggerUpdate();
  }

  addNewAddressMode() {
    this.selectedAddObj = [{
        unit: '',
        hnum: '',
        st: '',
        burb: '',
        clat: '',
        clong: '',
        pcode: '',
        tel: ''
    }];
    this.setEditingAddress();
    this.showAddrDlg();
  }

  enableEditAddress() {
    if (this.isEditModeAddress()) {
      if (this.hasMultiAdds()) {
        this.selectedAddObj = _.map(this.currentAddr.addObj, (addObj) => {
          const clone = _.clone(addObj);
          clone.addId = addObj.$key;
          if (_.isUndefined(clone.unit) || clone.unit == -9) {
            clone.unit = '';
          }
        });
      } else {
        const clone = _.clone(this.currentAddr.addObj);
        clone.addId = this.currentAddr.addObj.$key;
        if (_.isUndefined(clone.unit) || clone.unit == -9) {
          clone.unit = '';
        }
        this.selectedAddObj = [clone];
      }
    }

    console.log(this.selectedAddObj);
    this.showAddrDlg();
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
      this.setEditingAddress();
      if (this.fireAuth.currentUser.isAdmin() || this.fireAuth.currentUser.isUpdater()) {
        this.mapService.loadAllMapsWithMarkers(mapBase);
        // // listen for onClick events for 'all maps'
        // this.subs.push(this.onAddressClick.subscribe(data => {
        //   console.log(data);
        //   this.currentAddr = data.addrMarker;
        //   this.enableEditAddress();
        // }));
      } else {
        this.accessDenied();
        return;
      }
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
            this.title = `${this.mapService.maps[0].terId} - ${this.mapService.maps[0].name} ${this.mapService.isNormalMode() ? '' : '::Campaign'}`;
            if (this.winRef.nativeWindow.innerWidth <= this.shortenTitleWidth) {
              this.title = `Map ${this.mapService.maps[0].terId}${this.mapService.isNormalMode() ? '' : '::Campaign'}`;
            }
          }
          this.subs.push(this.onAddressClick.subscribe(data => {
            console.log(data);
            this.currentAddr = data.addrMarker;
            this.handleAddressClick();
          }));
        }
      }
    });
  }

  canOpenMap(map) {
    // if (this.fireAuth.currentUser) {
    //   console.log(map.isUser(this.fireAuth.currentUser) || this.fireAuth.currentUser.isAdmin() || this.fireAuth.currentUser.isUpdater());
    // }
    return this.fireAuth.currentUser && (map.isUser(this.fireAuth.currentUser) || this.fireAuth.currentUser.isAdmin() || this.fireAuth.currentUser.isUpdater());
  }

  loadSingleMap(mapBase) {
    this.minimumClusterSize = 200;
    this.subs.push(this.mapService.loadMapMarkersObs(mapBase, this.mapId).subscribe(map => {
      console.log(`Map: `);
      console.log(map);
      if (!this.canOpenMap(map)) {
        this.accessDenied();
        return;
      }
      this.mapStarted = map.assgnObj.$exists() && !_.isEmpty(map.assgnObj.started);
      // TODO: Check if there are any addresses that are empty
      // sort the addresses
      map.addresses = _.sortBy(map.addresses,
      [(addr) => {
        return (_.isUndefined(addr.lSt) || _.isNull(addr.lSt) ? _.toLower(addr.st) : addr.lSt  );
      }, (addr) => {
        return _.toSafeInteger(addr.hnum);
      }, (addr) => {
        return !addr.unit || addr.unit == -9 ? 0 : _.toSafeInteger(addr.unit);
      }]);

      this.currentMap = map;
      if (this.currentAddrList) {
        this.currentAddrList = _.cloneDeep(this.currentMap.addresses);
      }

      this.mapService.createMarkersWithStatus(map);
      this.points = this.mapService.mapMarkers;
      this.mapService.trackUpdates = true;

      this.onComplete.emit({});

      if (this.triggerUpdate) {
        this.mapService.triggerUpdate();
      }

      this.title = `${this.mapService.maps[0].terId} - ${this.mapService.maps[0].name} ${this.mapService.isNormalMode() ? '' : '::Campaign'}`;
      if (this.winRef.nativeWindow.innerWidth <= this.shortenTitleWidth) {
        this.title = `Map ${this.mapService.maps[0].terId} ${this.mapService.isNormalMode() ? '' : '::Campaign'}`;
      }
      const fullName = (this.fireAuth.currentUser && this.fireAuth.currentUser.userInfoObj) ? this.fireAuth.currentUser.userInfoObj.name : '';
      const terId = this.mapService.maps[0].terId;
      this.addUrl =  `https://docs.google.com/forms/d/e/1FAIpQLScYHfYNwnSIWAL9RAH3rEPC74WfkFT0FgcvaJKx1nAIROXS6A/viewform?usp=pp_url&entry.1810388592=Yes&entry.1189370340=&entry.45257833&entry.681741514=${terId}&entry.1482719893=${fullName}&entry.1683213160=%E6%98%AF&entry.293956968=&entry.602343366&entry.2071713990=${terId}&entry.138422963=${fullName}&entry.1018422546&entry.2060338072&entry.1052547294&entry.365006055&entry.1323592748=${terId}&entry.1534052334=${fullName}&entry.1011916189&entry.1303192619&entry.825337910&entry.1931492709&entry.2023645450=${terId}&entry.913416032=${fullName}`;
      // this.addUrl = `https://docs.google.com/forms/d/e/1FAIpQLScYHfYNwnSIWAL9RAH3rEPC74WfkFT0FgcvaJKx1nAIROXS6A/viewform?usp=pp_url&entry.1810388592=Yes&entry.1189370340&entry.45257833&entry.681741514&entry.1482719893&entry.1018422546&entry.2060338072&entry.1052547294&entry.365006055&entry.1323592748=${this.mapService.maps[0].terId}&entry.1534052334=${fullName}`;
      this.hideLoadingDialog();
      this.triggerUpdate = true;
      this.subs.push(this.onAddressClick.subscribe(data => {
        console.log(data);
        this.currentAddr = data.addrMarker;
        this.handleAddressClick();
      }));
    }));
  }

  handleAddressClick() {
    if (this.isEditModeAddress() || this.isEditStatus()) {
      // need to show the address dialog
      if (this.addrDlg) {
        // dialog already open, ignore...
        return;
      }
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
    } else if (this.isEditModeMoveAddress()) {
      // TODO: determine why there are 2 click events!!!! For now just cache and clear
      // So catch the last one and just ignore the second click event
      if (this.lastSelectedAddress == this.currentAddr) {
        this.lastSelectedAddress = null;
        return;
      } else {
        this.lastSelectedAddress = this.currentAddr;
      }
      if (this.currentAddr.marker.icon.url == this.ADDRESS_SELECTED_ICON) {
        this.currentAddr.marker.icon.url = this.ADDRESS_UNSELECTED_ICON;
        _.remove(this.selectedAddrMarkers, (item) => { return _.isEqual(item, this.currentAddr)});
      } else {
        this.currentAddr.marker.icon.url = this.ADDRESS_SELECTED_ICON;
        this.selectedAddrMarkers.push(this.currentAddr);
        this.lastSelectedAddress = null;
      }

      this.selectedAddresses = [];
      _.each(this.selectedAddrMarkers, addrMarker => {
        if (_.isArray(addrMarker.addObj)) {
          _.each(addrMarker.addObj, addObj => {
            this.selectedAddresses.push(addObj);
          });
        } else {
          this.selectedAddresses.push(addrMarker.addObj);
        }
      });
      this.mapService.triggerUpdate();
      this.adjustHeight();
      console.log(this.selectedAddresses);
    }
  }

  findTargetMap() {
    this.mapService.findByTerId(this.findMapId, (mapObj) => {
      if (mapObj) {
        _.forOwn(mapObj, (map, mapId) => {
          this.targetMapId = mapId;
          this.targetMapObj = map;
        });
      }
    });
  }

  moveSelectedAddresses() {
    console.log(`Moving to ${this.targetMapId}`);
    console.log(this.targetMapObj);
    this.mapService.moveAddress(this.mapId, this.targetMapId, this.targetMapObj.terId, this.targetMapObj.name, this.targetMapObj.fsg, this.selectedAddresses,
    () => {
      const curMarkers = this.selectedAddrMarkers;
      this.stopMoveAddressMode();
      // update the markers...
      console.log(`Removing...`);
      console.log(curMarkers);
      console.log(this.points);
      _.remove(this.points, (point)=> { return _.includes(curMarkers, point)});
      console.log(this.points);
      this.mapService.triggerUpdate();
    });
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
    if (_.isUndefined(addrObj.st) || _.isEmpty(addrObj.st)) {
      return '';
    }
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
      this.addrStatuses = this.currentMap.getAddrStatuses(this.fireAuth.currentUser, this.mapService);
    }
  }

  showAddrDlg(){
    console.log(this.points);
    if (this.mapId != 'all') {
      this.getStatuses();
    }

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

  resetEditMode() {
    if (this.mapId == 'all') {
      this.setEditingAddress();
    } else {
      this.setEditingStatus();
    }
  }

  cancelAddrDlg() {
    this.selectedAddObj = null;
    this.closeAddrDlg();
    this.resetEditMode();
  }

  showCurrentLoc() {
    this.onPosMarker.subscribe(pos => {
      if (this.locationSearching) {
        this.locationSearching = false;
      }
      if (pos) {
        this.onAddLocMarker.emit({
          position: pos.position,
          iconUrl: this.currentLocation.iconUrl
        });
        this.fireAuth.saveLoc(this.fireAuth.currentUser.userObj.uid, pos);
      } else {
        this.onAddLocMarker.emit(null);
      }
    });
    this.mapService.enableGeolocation(this.onPosMarker);
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

  saveStatuses() {
    this.currentMap.addresses = this.currentAddrList;
    this.closeAddrListDlg();
    this.showLoadingDialog();
    this.mapService.updateAddrStats(this.currentMap, this.fireAuth.currentUser, (map) => {
      _.each(map.addresses, (addObj)=>{
        const status = addObj.status;
        const addId = addObj.$key;

        this.currentMap.setStatus(addId, status);
        // this.currentMap.setStatusDetail(addId, nhData);
      });
      this.hideLoadingDialog();
    });
  }

  hasMultiAdds() {
    return this.currentAddr && _.isArray(this.currentAddr.addObj) && !this.selectedAddObj;
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
    // make a copy of the address list to we can cancel
    this.currentAddrList = _.cloneDeep(this.currentMap.addresses);
    this.addrListDlg = this.dialog.open(AddressListDlgComponent, {
      data: {consumer: this},
      disableClose: true
    });
  }

  closeAddrListDlg() {
    this.addrListDlg.close();
    this.currentAddrList = null;
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

  getStatus(addObj) {
    if (_.isUndefined(addObj.status) || _.isNull(addObj.status)) {
      addObj.status = 0;
    }
    return addObj;
  }

  getStatusBgColor(addObj, stat=null) {
    let bg = "#960202";
    const status = addObj ? addObj.status : stat;
    if (!_.isUndefined(status)) {
      switch(status) {
        case 1:
        case 9:
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
        case 10:
          bg = "#f2046f";
          break;
      }
    }
    return bg;
  }

  editMap() {
    if (_.isUndefined(this.fsgs)) {
      this.showLoadingDialog();
      const sub = this.mapService.getAllFsgMaps(this.mapBin)
      .flatMap((mapId:any) => {
        return Observable.of(null);
      })
      .debounce(() => {
        return Observable.interval(1000)
      })
      .subscribe(() => {
        sub.unsubscribe();
        _.forOwn(this.mapBin, (mapVal, mapId) => {
          this.mapIds.push(mapVal);
        });
        this.fsgs = _.uniq(_.map(this.mapIds, (mapId) => {
          return mapId.fsgName
        }));
        this.mapName = this.currentMap.mapObj.name;
        this.fsgName = this.currentMap.mapObj.fsg;
        this.mapKey = this.mapBin[this.mapId].mapKey;
        this.hideLoadingDialog();
        this.mapEditDlg = this.dialog.open(MapEditDlgComponent, {
          data: {consumer: this},
          disableClose: true
        });
      });
    } else {
      this.mapName = this.currentMap.mapObj.name;
      this.fsgName = this.currentMap.mapObj.fsg;
      this.mapKey = this.mapBin[this.mapId].mapKey;
      this.mapEditDlg = this.dialog.open(MapEditDlgComponent, {
        data: {consumer: this},
        disableClose: true
      });
    }
  }

  saveMapEdit() {
    this.closeMapEditDlg();
    this.showLoadingDialog();
    this.mapService.moveMap(this.mapId, this.mapKey, this.mapName, this.currentMap.mapObj.fsg, this.fsgName, () => {
      this.currentMap.mapObj.fsg = this.fsgName;
      this.currentMap.mapObj.name = this.mapName;
      this.mapBin[this.mapId].mapKey = this.mapId;
      this.title = `${this.currentMap.mapObj.terId} - ${this.currentMap.mapObj.name} ${this.mapService.isNormalMode() ? '' : '::Campaign'}`;
      this.hideLoadingDialog();
    });
  }

  closeMapEditDlg() {
    this.mapEditDlg.close();
  }
}

@Component({
  selector: 'map-edit-component',
  templateUrl: './map-edit-dlg.component.html'
})
export class MapEditDlgComponent {

  constructor(public dialogRef: MatDialogRef<any>, @Inject(MAT_DIALOG_DATA) public data: any, iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon('google-map',
        sanitizer.bypassSecurityTrustResourceUrl('/assets/images/google-maps.svg'));
    iconRegistry.addSvgIcon('edit-address',
        sanitizer.bypassSecurityTrustResourceUrl('/assets/images/edit_address.svg'));
  }
}

@Component({
  selector: 'addr-component',
  templateUrl: './address-dlg.component.html'
})
export class AddressDlgComponent {

  constructor(public dialogRef: MatDialogRef<any>, @Inject(MAT_DIALOG_DATA) public data: any, iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
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

  constructor(public dialogRef: MatDialogRef<any>, @Inject(MAT_DIALOG_DATA) public data: any, iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
  }
}
