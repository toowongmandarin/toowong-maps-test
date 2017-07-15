import { Component, Input, ViewChild, EventEmitter } from '@angular/core';
import { MapService } from './map.service';
import { Observable } from 'rxjs/Rx';
import { environment } from '../../environments/environment';
import { MdDialog, MdDialogRef } from '@angular/material';
import { MarkerClusterDirective } from './marker-cluster';

@Component({
  selector: 'map-component',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent {
  title = 'app';
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

  constructor(protected mapService: MapService, public dialog: MdDialog) {
  }

  toggleShowInfo() {
    this.showInfo = !this.showInfo;
    console.log(`Emitting: ${this.showInfo}`);
    this.onToggleShowInfo.emit(this.showInfo);
  }

  loadMaps() {
    const mapBase = environment.app.mapBase;
    // this.showCurrentLoc();
    this.loadingDialog = this.dialog.open(LoadingDialog, {disableClose:true});
    this.mapService.loadMaps(mapBase);
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
          this.loadingDialog.close();
          this.mapService.trackUpdates = true;
        }
      }
    });
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
    this.points = this.mapService.mapMarkers;
  }

  showMarker() {
    this.clearMaps();
  }
}

@Component({
 selector: 'loading-dialog',
 template: `
            <div md-dialog-content>
              <div class="flex-container"
               fxLayout="column"
               fxLayout.xs="column"
               fxLayoutAlign="center center"
               fxLayoutAlign.xs="start">
                  <img src="/assets/images/pie-loader.svg">
               </div>
            </div>
            `
})
export class LoadingDialog {
 constructor(public dialogRef: MdDialogRef<any>) {}
}
