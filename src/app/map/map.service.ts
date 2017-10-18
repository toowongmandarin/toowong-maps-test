import { Injectable, Inject, Output, EventEmitter } from '@angular/core';
import { Observable, Subject } from 'rxjs/Rx';
import * as _ from 'lodash';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import * as firebase from 'firebase/app';
import { MapsUser } from '../user/user.component';
import moment from 'moment-es6';

declare const google;

export class Map {
  mapObj: any;
  assgnObj: any;
  addresses: any;
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

  getStatus(addId: string) {
    return _.get(this.assgnObj, `address.${addId}`);
  }

  // only for manually setting the status, does not synch or save to backend!
  setStatus(addId: string, status: any) {
    if (_.isUndefined(this.assgnObj.address)) {
      this.assgnObj.address = {};
    }
    this.assgnObj.address[addId] = status;
  }

  getStatusDetail(addId: string) {
    return _.get(this.assgnObj, `det.${addId}`);
  }

  setStatusDetail(addId: string, detailData: any) {
    if (_.isUndefined(this.assgnObj.det)) {
      this.assgnObj.det = {};
    }
    this.assgnObj.det[addId] = detailData;
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
  map: Map;
  addObj: any;
  mapObj: any;
  lat: number;
  long: number;
  url: string;
  infoWindowStr: string;
  markerIdx: any;
  addId: any;
  useMainMarker: boolean;
  modalMode: boolean;
  clickEmitter: any;
  marker: any;
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
  addrStatuses = [
    { val: 0, label: "Not Done" },
    { val: 1, label: "Done" },
    { val: 2, label: "Not Chinese" },
    { val: 3, label: "Not at Home - 1"},
    { val: 4, label: "Not at Home - 2" },
    { val: 5, label: "Do Not Call" },
    { val: 7, label: "Phone Witnessing" },
    { val: 8, label: "Reported Issue" },
  ];

  constructor(protected db: AngularFireDatabase) {
    this.maps = [];
    this.updatePipe.debounceTime(5000).subscribe(data=>{
      this.onUpdate.emit(data);
    });
  }

  public triggerUpdate() {
    this.onUpdate.emit({});
  }

  /**
  Loads address markers, will not load all
  */
  loadMapMarkersObs(mapBaseUrl, mapId: string): Observable<any> {
    const mapBin: any = {};
    return this.db.object(`/maps/${mapId}`)
    .flatMap(mapObj=> {
      if (mapObj.addresses) {
        if (this.trackUpdates) {
          this.updatePipe.next({});
        } else {
          this.maps.push(mapObj);
          mapBin.mapObj = mapObj;
          return Observable.of(mapObj);
        }
      }
      return Observable.of(null);
    })
    .filter(mapObj => mapObj != null )
    .flatMap(mapObj => {
      return this.db.object(`/assignedMaps/active/${mapId}`).flatMap(assgnObj => {
        console.log(`Got assigned maps object...`);
        // console.log(assgnObj);
        mapBin.assgnObj = assgnObj;
        return Observable.of(mapObj);
      });
    })
    .flatMap(mapObj => {
      return this.db.list(`/maps/${mapId}/addresses`).flatMap(addressesObj => {
        return Observable.from(addressesObj);
      });
    })
    .filter(addIdObj => addIdObj != null )
    .flatMap((addIdObj: any) => {
      return this.db.object(`/addresses/${addIdObj.$value}`);
    })
    .filter(addObj => addObj != null)
    .flatMap((addObj: any) => {
      if (!mapBin.addresses) {
        mapBin.addresses = [];
      }
      _.remove(mapBin.addresses, add => {
        return add.$key == addObj.$key;
      });
      mapBin.addresses.push(addObj);
      return Observable.of(addObj);
    })
    .flatMap(whatever => {
      return Observable.of(mapBin);
    })
    .debounce(() => {
      return Observable.interval(1000)
    })
    .flatMap(whatever => {
      const map = new Map(mapId, mapBin.mapObj, mapBin.assgnObj);
      _.forEach(mapBin.addresses, add => {
        _.forOwn(mapBin.assgnObj.address, (val, key) => {
          if (key == add.$key) {
            add.status = _.toNumber(val);
          }
        });
      });
      map.addresses = mapBin.addresses;
      return Observable.of(map);
    });
  }

  protected createStatusMarkerIconConfig(size, statusVal) {
    return {scaledSize: size, url: `/assets/images/place-markers/status-${statusVal}.svg`};
  }

  createMarkersWithStatus(map: Map) {
    const scaledMarkerSize = new google.maps.Size(35, 35);
    // create icons...
    const markerIcons = {};
    const defaultMarkerIcon = this.createStatusMarkerIconConfig(scaledMarkerSize, 403);
    _.forEach(this.addrStatuses, stat => {
      if (_.isEmpty(stat)) {
        stat = 0;
      }
      markerIcons[stat.val] = this.createStatusMarkerIconConfig(scaledMarkerSize, stat.val);
    });
    // console.log(this.mapMarkers);
    _.forEach(map.addresses, addObj => {
      let marker = null;
      const addId = addObj.$key;
      // console.log(`Add id is: ${addId}`);

      if (this.trackUpdates) {
        marker = _.find(this.mapMarkers, mrk => {
          return _.find(mrk.addId, mrkId => {
            return mrkId == addId;
          });
        });
        // console.log(`Marker is:`);
        // console.log(marker);
      } else {
        marker = new AddressMarker();
        marker.addId = [addId];
        marker.map = map;
      }
      addObj.clat = _.toNumber(addObj.clat);
      addObj.clong = _.toNumber(addObj.clong);
      // check if this lat and long already on the list...
      const multiMarker = _.find(this.mapMarkers, mrk => {
        if (_.isArray(mrk.addObj)) {
          return _.find(mrk.addObj, mrkAddObj => {
            return mrkAddObj.clat == addObj.clat && mrkAddObj.clong == addObj.clong && mrkAddObj.$key != addId;
          });
        } else {
          return mrk.addObj.clat == addObj.clat && mrk.addObj.clong == addObj.clong && mrk.addObj.$key != addId;
        }
      });
      if (multiMarker) {
        if (!this.trackUpdates) {
          if (_.isArray(multiMarker.addObj)) {
            multiMarker.addObj.push(addObj);
          } else {
            const newAddObj = [multiMarker.addObj];
            newAddObj.push(addObj);
            multiMarker.addObj = newAddObj;
          }

          marker = multiMarker;
          marker.addId.push(addId);
        }
      } else {
        marker.addObj = addObj;
      }
      marker.mapObj = map.mapObj;
      marker.modalMode = true;
      // creating icon
      // if icon is multi addresses, then all icon set to be worked on...
      let addObjIcon = defaultMarkerIcon;
      if (multiMarker) {
        if (addObj.status) {
          addObjIcon =  markerIcons[addObj.status];
          const statuses = _.map(multiMarker.addObj, (mulitAddObj:any) => {
            return mulitAddObj.status;
          });
          // revert icon to wip if an address needs a visit
          _.forEach(statuses, status => {
            switch (status) {
                case 0:
                case 3:
                  addObjIcon =  markerIcons[status];
                  // console.log(`Overriding status is: ${status}`);
                  // console.log(addObjIcon);
            }
          });
        } else {
          if (!_.isEmpty(map.assgnObj.started)) {
            addObjIcon = markerIcons[0];
          }
        }
        // console.log(addObjIcon);
        multiMarker.marker = new google.maps.Marker({
          position: new google.maps.LatLng(addObj.clat, addObj.clong),
          icon: addObjIcon,
          label: `${multiMarker.addObj.length}`
        });
      } else {
        // console.log(`Using status: ${addObj.status}`);
        if (addObj.status) {
          addObjIcon =  markerIcons[addObj.status];
        } else {
          if (!_.isEmpty(map.assgnObj.started)) {
            addObjIcon = markerIcons[0];
          }
        }
        // console.log(addObjIcon);
        marker.marker = new google.maps.Marker({
          position: new google.maps.LatLng(addObj.clat, addObj.clong),
          icon: addObjIcon
        });
        if (!this.trackUpdates) {
          this.mapMarkers.push(marker);
        }
      }
    });
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

  getAllFsgMapsList(sortMaps: boolean = false): Observable<Fsg[]> {
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
      if (sortMaps) {
        // Sort maps order:
        // 1. Started date
        // 2. Last completed
        _.each(this.fsgs, (fsg) => {
          const sortedMaps = _.sortBy(fsg.maps,
          [(map) => {
            return map.assgnObj && map.assgnObj.started ? moment(map.assgnObj.started).unix() : null;
          }, (map) => {
            return map.mapObj && map.mapObj.lastCompleted ? moment(map.mapObj.lastCompleted).unix() : 0;
          }]);
          fsg.maps = sortedMaps;
        });
      }
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
      // console.log(this.fsgs);
      const fsgs = [];
      const fsgBin = {};
      _.forOwn(mapBin, (val, key) => {
        // let fsg = _.find(this.fsgs, (fsg)=>{return fsg.fsgName == val.fsgName });
        // if (!fsg) {
        //   fsg = new Fsg(val.fsgName, []);
        //   this.fsgs.push(fsg);
        // }
        // let map = _.find(fsg.maps, (map) => { return map.id == key });
        // if (map) {
        //   map.mapObj = val.mapObj;
        //   map.assgnObj = val.assgnObj;
        // } else {
        //   fsg.maps.push(new Map(key, val.mapObj, val.assgnObj));
        // }
        let fsg = _.find(fsgs, (fsg)=>{return fsg.fsgName == val.fsgName });
        if (!fsg) {
          fsg = new Fsg(val.fsgName, []);
          fsgs.push(fsg);
        }
        fsg.maps.push(new Map(key, val.mapObj, val.assgnObj));
      });

      // return Observable.of(this.fsgs);
      return Observable.of(fsgs);
    });
  }

  updateLastSaved(map: Map, userInfo: any) {

  }

  updateOwner(map: Map, owner: any, prevOwner: any) {
    const updateObj = {};
    const assgnInfo:any = {
      owner: {id: owner.id, name: owner.name, expiry: owner.expiry},
      expiry: owner.expiry,
      started: map.assgnObj.started
    };
    if (map.assgnObj.address) {
      assgnInfo.address =  map.assgnObj.address;
    }
    if (map.assgnObj.users) {
      assgnInfo.users = map.assgnObj.users;
    }
    if (_.isEmpty(map.assgnObj.started)) {
      assgnInfo.started = moment().toDate();
    }
    if (prevOwner && owner.id != prevOwner.id) {
      assgnInfo.prevOwner = prevOwner;
    }
    updateObj[`/assignedMaps/active/${map.id}`] = assgnInfo;
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
    updateObj[`/assignedMaps/active/${map.id}/expiry`] = null;
    updateObj[`/users/${prevOwner.id}/maps/${map.id}`] = null;
    updateObj[`/assignedMaps/active/${map.id}/prevOwner`] = prevOwner;
    this.db.database.ref().update(updateObj);
  }

  removeUsers(map: Map, users: any) {
    const updateObj = {};
    _.forEach(users, user => {
      updateObj[`/users/${user.id}/maps/${map.id}`] = null;
      updateObj[`/assignedMaps/active/${map.id}/users/${user.id}`] = null;
    });
    this.db.database.ref().update(updateObj);
  }

  updateAddrStat(mapId, addId, status, user, cb=null) {
    const updateObj: any = {};
    const nhData: any = {};
    updateObj[`/assignedMaps/active/${mapId}/address/${addId}`] = status;
    if (status == 3 || status == 4) {
      // not at home 1 or 2
      nhData.nh_when = moment().toDate();
      nhData.nh_by = user.userInfoObj.name;
      updateObj[`/assignedMaps/active/${mapId}/det/${addId}/nh_when`] = nhData.nh_when;
      updateObj[`/assignedMaps/active/${mapId}/det/${addId}/nh_by`] = nhData.nh_by;
    }
    updateObj[`/assignedMaps/active/${mapId}/lastSaved`] = {id: user.userObj.uid, name: user.userInfoObj.name, when: moment().toDate() };
    this.db.database.ref().update(updateObj).then(()=> {
      if (cb) cb(addId, status, nhData);
    });
  }

  getCompletionPercentage(map: Map) {
    if (map.mapObj.addresses && map.assgnObj && !_.isUndefined(map.assgnObj.address)) {
      return Math.round((this.getVisitedAddresses(map) / map.addressCount) * 100);
    } else {
      return 0;
    }
  }

  getVisitedAddresses(map: Map) {
    let numDone = 0;
    if (map.mapObj.addresses && map.assgnObj && !_.isUndefined(map.assgnObj.address)) {
      _.forOwn(map.mapObj.addresses, (addId, key) => {
        if (!_.isUndefined(map.assgnObj.address[addId])) {
          const status = map.assgnObj.address[addId];
          switch (status) {
            case 1:
            case 2:
            case 4:
            case 5:
            case 7:
            case 8:
              numDone++;
          }
        }
      });
      return numDone;
    } else {
      return 0;
    }
  }

  getRemainingAddresses(map: Map) {
    return map.addressCount - this.getVisitedAddresses(map);
  }

}
