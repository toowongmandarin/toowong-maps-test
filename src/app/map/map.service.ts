import { Injectable, Inject, Output, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs/Rx';
import * as _ from 'lodash';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

export class AddressMarker {
  addObj: any;
  mapObj: any;
  lat: number;
  long: number;
  url: string;
  infoWindowStr: string;
  markerIdx: any;
  addId: string;
}

@Injectable()
export class MapService {
  @Output() onUpdate = new EventEmitter<any>();
  mapMarkers: AddressMarker[];
  markerIdx: number = 0;
  trackUpdates: boolean = false;
  updatePipe = new Subject<any>();
  maps: any[];

  constructor(protected db: AngularFireDatabase) {
    this.maps = [];
    this.updatePipe.debounceTime(5000).subscribe(data=>{
      this.onUpdate.emit(data);
    });
  }

  loadMaps(mapBaseUrl) {
    this.mapMarkers = [];
    this.db.list('/fsg/list').subscribe(fsgList=>{
      fsgList.forEach(fsg => {
        this.db.list(`/fsg/${fsg.$value}`).subscribe(fsgMaps => {
          fsgMaps.forEach(mapId => {
            this.db.object(`/maps/${mapId.$value}`).subscribe(mapObj=>{
              // console.log(mapObj);
              // if (mapId.$value == "X1Zce" || mapId.$value == "w1V3G") {
              //   console.log(`Got data:`);
              //   console.log(mapObj);
              // }
              if (mapObj.addresses) {
                if (this.trackUpdates) {
                  this.updatePipe.next({});
                } else {
                  this.maps.push(mapObj);
                }
                const idx = this.markerIdx++;
                let addCtr = 0;
                _.forEach(mapObj.addresses, addId => {
                  // console.log(`/addresses/${addId}`);
                  this.db.object(`/addresses/${addId}`).subscribe(addObj => {
                    if (!_.isEmpty(addObj.burb)) {
                      addCtr++;
                      let marker = null;
                      if (this.trackUpdates) {
                        marker = _.find(this.mapMarkers, mrk=> {return mrk.addId == addId});
                      } else {
                        marker = new AddressMarker();
                        marker.addId = addId;
                      }
                      addObj.clat = _.toNumber(addObj.clat);
                      addObj.clong = _.toNumber(addObj.clong);
                      marker.addObj = addObj;
                      marker.mapObj = mapObj;
                      marker.url = `${mapBaseUrl}/maps/detail/${mapId.$value}`;
                      marker.infoWindowStr = `
                                                <div>Address: ${addObj.unit != -9 ? 'Unit ' + addObj.unit + ',' : ''} ${addObj.hnum} ${addObj.st}, ${addObj.burb}</div>
                                                <div>Map: <a href='${marker.url}' target='_blank'>${mapObj.terId} - ${mapObj.name}</a></div>
                                                <div>FSG: ${mapObj.fsg}</div>
                                              `;
                      marker.markerIdx = idx;

                      if (!this.trackUpdates) {
                        this.mapMarkers.push(marker);
                      }
                    } else {
                      console.log(`Address not found: ${addId} in map: ${mapId.$value}`);
                    }
                  });
                });
              } else {
                console.log(`Map not found: ${mapId.$value} in fsg: ${fsg.$value}`);
              }
            });
          });
        });
      });
    });
  }

  clearAllMarkers() {
    this.mapMarkers.length = 0;
    this.mapMarkers = [];
  }
}
