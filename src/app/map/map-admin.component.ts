import { Component, Input, ViewChild, EventEmitter, Inject} from '@angular/core';
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
import { DomSanitizer } from '@angular/platform-browser';
import { NotifyDlgComponent } from '../ui/home.component';

@Component({
  selector: 'map-admin-component',
  templateUrl: './map-admin.component.html'
})
export class MapAdminComponent extends BaseComponent {
  appTitle: string = environment.app.title;
  newDataType: string = null;
  searchDataType: string = 'address';
  isBusy: boolean = false;
  searchRes: any;
  displayedColumns = ["fullSt", "burb", "map", "fsg"];

  fsgName: string;
  mapName: string;
  stName: string;

  msg: string;

  mapBin: any = {};
  mapIds: any = [];
  fsgs: any;

  constructor(dialog: MatDialog, fireAuth: AuthService, protected mapService: MapService, private winRef: WindowRef) {
    super();
    this.dialog = dialog;
    this.fireAuth = fireAuth;
  }

  ngOnInit() {
    this.mapService.getAllFsgMaps(this.mapBin)
    .flatMap((mapId:any) => {
      return Observable.of(null);
    })
    .debounce(() => {
      return Observable.interval(1000)
    })
    .subscribe(() => {
      _.forOwn(this.mapBin, (mapVal, mapId) => {
        this.mapIds.push(mapVal);
      });
      this.fsgs = _.uniq(_.map(this.mapIds, (mapId) => { return mapId.fsgName }));
    });
    this.mapService.getMetadata().subscribe(meta => {

    });
  }

  saveNewData() {
    const that = this;
    if (this.newDataType == "fsg") {
      if (_.find(this.fsgs, (fsg) => { return fsg == this.fsgName; })) {
        this.msg = "Name already exists.";
        return;
      }
      this.isBusy = true;
      this.mapService.addNewFsg(this.fsgName, () => {
        that.msg = "FSG Successfully Added!"
        that.isBusy = false;
      });
    }
    if (this.newDataType == "map") {
      this.isBusy = true;
      this.mapService.addNewMap(this.fsgName, this.mapName, false, () => {
        that.msg = "Map Successfully Added!"
        that.isBusy = false;
      });
    }
  }

  searchData() {
    this.isBusy = true;
    this.showLoadingDialog();
    const that = this;
    if (this.searchDataType == "address") {
      console.log(`Finding: ${this.stName}`);
      this.mapService.findByStreet(this.stName, (searchRes) => {
        console.log(searchRes);
        this.isBusy = false;
        const sRes = []
        _.forOwn(searchRes, (addObj, addId)=>{
          addObj['addId'] = addId;
          addObj['fullSt'] = `${addObj.unit && addObj.unit != -9 ? `${addObj.unit}/` : ''} ${addObj.hnum} ${addObj.st}`
          sRes.push(addObj)
        });
        this.searchRes = sRes;
        this.hideLoadingDialog();
      });
    }
  }

}
