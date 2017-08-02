import { Injectable, Inject, Output, EventEmitter } from '@angular/core';
import { Observable, Subject } from 'rxjs/Rx';
import * as _ from 'lodash';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import * as firebase from 'firebase/app';
import { MapsUser } from '../user/user.component';

export class Map {
  mapObj: any;
  assgnObj: any;
  addressCount: number;
  id: string;

  constructor(mapId: string, mapObj:any, assgnObj: any) {
    this.id = mapId;
    this.mapObj = mapObj;
    this.assgnObj = assgnObj;
    this.addressCount = _.isEmpty(mapObj.addresses) ? 0 : _.size(mapObj.addresses);
  }

  get isAssigned() {
    return this.assgnObj.$exists();
  }

  hasOwner(): boolean {
    // if (this.id == "zhacW") {
    //   console.log(this.assgnObj);
    //   console.log(this.assgnObj && this.assgnObj.$exists() && !_.isEmpty(this.assgnObj.owner));
    // }
    return this.assgnObj && this.assgnObj.$exists() && !_.isEmpty(this.assgnObj.owner);
  }

  get ownerInfo(): any {
    return this.assgnObj.owner;
  }

  getOwner() {
    return this.assgnObj.owner;
  }

  setOwner(userObj) {
    if (_.isFunction(this.assgnObj.$exists) || !this.assgnObj.$exists()) {
      this.assgnObj = {};
    }
    if (!this.assgnObj.owner) {
      this.assgnObj.owner = {};
    }
    this.assgnObj.owner.id = userObj.$key;
    this.assgnObj.owner.name = userObj.name;
  }

  getUsersList() {
    const list = [];
    _.forOwn(this.assgnObj.users, (val, key)=>{
      list.push({name: val.name, id: key, expiry: val.expiry});
    });
    return list;
  }

  hasUsers() {
    return !_.isEmpty(this.getUsersList());
  }

  isOwner(user: MapsUser) {
    return user.userInfoObj.$key == this.assgnObj.owner.id;
  }

  isUser(user: MapsUser) {
    const inUserList = _.find(this.getUsersList(), (u)=> {return u.id == user.userInfoObj.$key}) != null;
    return (this.hasOwner() &&  this.isOwner(user)) || (this.hasUsers() && inUserList);
  }
}

export class Fsg {
  fsgName: string;
  maps: Map[];
  constructor(fsgName:string, maps:Map[]) {
    this.fsgName = fsgName;
    this.maps = maps;
  }
}

export class AddressMarker {
  addObj: any;
  mapObj: any;
  lat: number;
  long: number;
  url: string;
  infoWindowStr: string;
  markerIdx: any;
  addId: string;
  useMainMarker: boolean;
  modalMode: boolean;
  clickEmitter: any;
}

@Injectable()
export class MapService {
  @Output() onUpdate = new EventEmitter<any>();
  mapMarkers: AddressMarker[] = [];
  markerIdx: number = 0;
  trackUpdates: boolean = false;
  updatePipe = new Subject<any>();
  maps: any[];
  subs: any[] = [];
  fsgs: Fsg[] = [];

  constructor(protected db: AngularFireDatabase) {
    this.maps = [];
    this.updatePipe.debounceTime(5000).subscribe(data=>{
      this.onUpdate.emit(data);
    });
  }

  public triggerUpdate() {
    this.onUpdate.emit({});
  }

  loadMapMarkers(mapBaseUrl:string, mapId: string, modalMode:boolean = false) {
    this.subs.push(this.db.object(`/maps/${mapId}`).subscribe(mapObj=>{
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
          console.log(`/addresses/${addId}`);
          this.subs.push(this.db.object(`/addresses/${addId}`).subscribe(addObj => {
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

              if (modalMode) {
                marker.modalMode = modalMode;
              } else {
                marker.url = `${mapBaseUrl}/maps/detail/${mapId}`;
                marker.infoWindowStr = `
                                          <div>Address: ${addObj.unit != -9 ? 'Unit ' + addObj.unit + ',' : ''} ${addObj.hnum} ${addObj.st}, ${addObj.burb}</div>
                                          <div>Map: <a href='${marker.url}' target='_blank'>${mapObj.terId} - ${mapObj.name}</a></div>
                                          <div>FSG: ${mapObj.fsg}</div>
                                        `;
                marker.markerIdx = idx;
              }

              if (!this.trackUpdates) {
                this.mapMarkers.push(marker);
              }
            } else {
              console.log(`Address not found: ${addId} in map: ${mapId}`);
            }
          }));
        });
      } else {
        console.log(`Map not found: ${mapId}`);
      }
    }));
  }

  // Asynch call
  loadAllMapsWithMarkers(mapBaseUrl) {
    this.subs.push(this.db.list('/fsg/list').subscribe(fsgList=>{
      fsgList.forEach(fsg => {
        this.subs.push(this.db.list(`/fsg/${fsg.$value}`).subscribe(fsgMaps => {
          fsgMaps.forEach(mapId => {
            this.loadMapMarkers(mapBaseUrl, mapId.$value);
          });
        }));
      });
    }));
  }

  clearAllMarkers() {
    _.forEach(this.subs, sub => {
      sub.unsubscribe();
    });
    this.subs.length = 0;
    this.maps.length = 0;
    this.mapMarkers.length = 0;
    this.trackUpdates = false;
    this.triggerUpdate();
  }

  getAllFsgMaps(mapBin: any): Observable<any> {
    this.fsgs.length = 0;
    return this.db.list('/fsg/list').flatMap(fsgList=>{
      // console.log(`Got fsg list...`);
      return Observable.from(fsgList);
    })
    .flatMap((fsgObj:any) => {
      const fsgName = fsgObj.$value;
      // console.log(`Getting FSG: ${fsgName}`);
      return this.db.list(`/fsg/${fsgName}`).flatMap(mapIdList => {
        // console.log(`Got map ids...`);
        mapIdList.forEach(mapId => {
          mapBin[mapId.$value] = {fsgName: fsgName};
        });
        // console.log(mapBin);
        return Observable.from(mapIdList);
      });
    });
  }

  getAllFsgMapsList(): Observable<Fsg[]> {
    const mapBin = {};
    return this.getAllFsgMaps(mapBin)
    .flatMap((mapId:any) => {
      // console.log(`Getting map...${mapId.$value}`);
      return this.db.object(`/maps/${mapId.$value}`);
    })
    .flatMap(mapObj => {
      // console.log(`Got map....`);
      mapBin[mapObj.$key].mapObj = mapObj;
      // console.log(mapBin[mapObj.$key]);
      return this.db.object(`/assignedMaps/active/${mapObj.$key}`).flatMap(assgnObj => {
        mapBin[mapObj.$key].assgnObj = assgnObj;
        return Observable.of(mapObj);
      });
    })
    .flatMap(whatever => {
      // console.log(`Populated map bin...`);
      // console.log(mapBin);
      return Observable.of(mapBin);
    })
    .debounce(() => {
      return Observable.interval(1000)
    })
    .flatMap(whatever => {
      // Pivot data into...
      const fsgBin = {};
      _.forOwn(mapBin, (val, key) => {
        let fsg = _.find(this.fsgs, (fsg)=>{return fsg.fsgName == val.fsgName });
        if (!fsg) {
          fsg = new Fsg(val.fsgName, []);
          this.fsgs.push(fsg);
        }
        let map = _.find(fsg.maps, (map) => { return map.id == key });
        if (map) {
          map.mapObj = val.mapObj;
          map.assgnObj = val.assgnObj;
        } else {
          fsg.maps.push(new Map(key, val.mapObj, val.assgnObj));
        }
      });
      return Observable.of(this.fsgs);
    });
  }

  getUserMaps(user: MapsUser): Observable<Fsg[]>  {
    const mapBin = {};
    return this.db.object(`/users/${user.userInfoObj.$key}/maps`).flatMap(mapListObj=> {
      console.log(`Got user maps list...`);
      this.fsgs = [];
      if (mapListObj.$exists()) {
        const mapIds = [];
        _.forOwn(mapListObj, (val, mapId)=> {
          mapIds.push(mapId);
        });
        return Observable.from(mapIds);
      }
      return Observable.of(null);
    }).flatMap((mapId:any) => {
      console.log(`Got map id....`);
      this.fsgs.length = 0;
      if (mapId) {
        return this.db.object(`/maps/${mapId}`);
      } else {
        return Observable.of(null);
      }
    })
    .flatMap(mapObj => {
      console.log(`Got map obj....`);
      this.fsgs.length = 0;
      if (mapObj) {
        if (_.isEmpty(mapBin[mapObj.$key])) {
          mapBin[mapObj.$key] = {fsgName: "Your Maps"};
        }
        mapBin[mapObj.$key].mapObj = mapObj;
        // console.log(mapBin[mapObj.$key]);
        return this.db.object(`/assignedMaps/active/${mapObj.$key}`).flatMap(assgnObj => {
          mapBin[mapObj.$key].assgnObj = assgnObj;
          return Observable.of(mapObj);
        });
      }
      return Observable.of(null);
    })
    .flatMap(whatever => {
      // console.log(`Populated map bin...`);
      // console.log(mapBin);
      return Observable.of(mapBin);
    })
    .debounce(() => {
      return Observable.interval(1000)
    })
    .flatMap(whatever => {
      // Pivot data into...
      console.log(this.fsgs);
      const fsgBin = {};
      _.forOwn(mapBin, (val, key) => {
        let fsg = _.find(this.fsgs, (fsg)=>{return fsg.fsgName == val.fsgName });
        if (!fsg) {
          fsg = new Fsg(val.fsgName, []);
          this.fsgs.push(fsg);
        }
        let map = _.find(fsg.maps, (map) => { return map.id == key });
        if (map) {
          map.mapObj = val.mapObj;
          map.assgnObj = val.assgnObj;
        } else {
          fsg.maps.push(new Map(key, val.mapObj, val.assgnObj));
        }
      });

      return Observable.of(this.fsgs);
    });
  }

  updateOwner(map: Map, owner: any) {
    const updateObj = {};
    updateObj[`/assignedMaps/active/${map.id}/owner`] = {id: owner.id, name: owner.name, expiry: owner.expiry};
    updateObj[`/users/${owner.id}/maps/${map.id}/expiry`] = owner.expiry;
    this.db.database.ref().update(updateObj);
  }

  updateUsers(map: Map, users: any[]) {
    const updateObj = {};
    const userListObj = {};
    _.forEach(users, user => {
      userListObj[user.id] = {name:user.name, expiry: user.expiry};
      updateObj[`/users/${user.id}/maps/${map.id}/expiry`] = user.expiry;
    });
    updateObj[`/assignedMaps/active/${map.id}/users`] = userListObj;
    console.log(updateObj);
    this.db.database.ref().update(updateObj);
  }

  removeOwner(map: Map, prevOwner: any) {
    const updateObj = {};
    updateObj[`/assignedMaps/active/${map.id}/owner`] = null;
    updateObj[`/users/${prevOwner.id}/maps/${map.id}`] = null;
    this.db.database.ref().update(updateObj);
  }

  removeUsers(map: Map, users: any) {
    const updateObj = {};
    _.forEach(users, user => {
      updateObj[`/users/${user.id}/maps/${map.id}`] = null;
    });
    this.db.database.ref().update(updateObj);
  }

}
