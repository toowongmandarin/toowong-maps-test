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

  getAddrStatuses(currentUser, mapService) {
    let addrStatuses = [];
    if (currentUser.isAdmin() || currentUser.isUpdater()) {
      if (this.mapObj.search) {
        // this.addrStatuses = this.mapService.addrStatuses;
        addrStatuses = _.filter(mapService.addrStatuses, (stat:any) => {
          if (stat.val != 10 && stat.val != 4) {
            if (stat.val == 3) {
              stat.label = "Not at Home";
            }
            return stat;
          } else {
            return false;
          }
        });
      } else {
        addrStatuses = _.filter(mapService.addrStatuses, (stat:any) => {
          return stat.val != 10 ? stat : false;
        });
      }
    } else {
      if (mapService.isNormalMode()) {
        _.forEach(mapService.addrStatuses, stat => {
         if (stat.val != 5 && stat.val != 7) {
           // skip not at home 2 and not at home 3 for search maps
           if (!this.mapObj.search && (stat.val == 10 || stat.val == 4) ) {
              return true;
           } else
           if (stat.val == 3 && this.mapObj.search) {
             stat.label = "Not at Home";
           }
           addrStatuses.push(stat);
         }
       });
     } else {
       // when on campaign mode remove the not-at-home
       _.forEach(mapService.addrStatuses, stat => {
        if (stat.val != 4 && stat.val != 5 && stat.val != 7 && stat.val != 10) {
          addrStatuses.push(stat);
        }
      });
     }
    }
    return addrStatuses;
  }
}

export class Fsg {
  fsgName: string;
  maps: Map[];
  completedMapsCtr: number;
  completionRate: number;
  metadata: any;

  constructor(fsgName:string, maps:Map[], meta:any = null) {
    this.fsgName = fsgName;
    this.maps = maps;
    this.completedMapsCtr = 0;
    this.completionRate = 0;
    this.metadata = meta;
  }

  getCompletionPercent() {
    return this.completionRate;
  }

  computeCompleted() {
    _.each(this.maps, (map) => {
      if (this.metadata.mode.campaign) {
        if (map.mapObj.campaignCtr > 0) {
          this.completedMapsCtr++;
        }
      } else {
        if (map.mapObj.doneCtr > 0) {
          this.completedMapsCtr++;
        }
      }
    });
    this.completionRate = this.completedMapsCtr == 0 ? 0 : Math.floor(((this.completedMapsCtr / this.maps.length) * 100));
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
    { val: 1, label: "Done - Mandarin" },
    { val: 9, label: "Done - Cantonese" },
    { val: 2, label: "Not Chinese" },
    { val: 3, label: "Not at Home - 1"},
    { val: 4, label: "Not at Home - 2" },
    { val: 10, label: "Not at Home - 3" },
    { val: 5, label: "Do Not Call" },
    { val: 7, label: "Phone Witnessing" },
    { val: 8, label: "Reported Issue" },
  ];
  metadata: any;
  currentActiveMapRoot = '/assignedMaps/active/';
  locationWatch: any;
  preferences: any;

  constructor(protected db: AngularFireDatabase) {
    this.maps = [];
    this.updatePipe.debounceTime(5000).subscribe(data=>{
      this.onUpdate.emit(data);
    });
  }

  public getMetadata() {
    if (this.metadata) {
      return Observable.of(this.metadata);
    } else {
      return this.db.object(`/metadata`).flatMap(meta => {
        this.metadata = meta;
        if (this.metadata.mode.campaign) {
          this.currentActiveMapRoot = '/assignedMaps/campaign/';
        }
        return Observable.of(this.metadata);
      });
    }
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
      return this.db.object(`${this.currentActiveMapRoot}${mapId}`).flatMap(assgnObj => {
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
      addObj.addId = addObj.$key;
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
        if (_.isUndefined(add.status) || _.isNull(add.status)) {
          add.status = 0;
        }
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
    return this.db.object('/fsg/list').flatMap(fsgObjList=>{
      // console.log(`Got fsg list...`);
      const fsgList = [];
      _.forOwn(fsgObjList, (fsgVal, fsgKey) => {
        fsgList.push({'$key': fsgKey, '$value': fsgVal});
      });
      return Observable.from(fsgList);
    })
    .flatMap((fsgObj:any) => {
      const fsgName = fsgObj.$value;
      // console.log(`Getting FSG: ${fsgName}`);
      return this.db.object(`/fsg/${fsgName}`).flatMap(mapIdObjList => {
        // console.log(`Got map ids...`);
        const mapIdList = [];
        _.forOwn(mapIdObjList, (mapIdVal, mapIdKey) => {
          mapIdList.push({'$key': mapIdKey, '$value': mapIdVal})
        });
        mapIdList.forEach(mapId => {
          mapBin[mapId.$value] = {fsgName: fsgName, mapKey: mapId.$key};
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
      return this.db.object(`${this.currentActiveMapRoot}${mapObj.$key}`).flatMap(assgnObj => {
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
          fsg = new Fsg(val.fsgName, [], this.metadata);
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
    return this.db.object(this.getUserMapPath(user.userInfoObj.$key)).flatMap(mapListObj=> {
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
        return this.db.object(`${this.currentActiveMapRoot}${mapObj.$key}`).flatMap(assgnObj => {
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

  updateOwner(map: Map, owner: any, prevOwner: any, isPersonal:boolean = false, notes:any = null) {
    const updateObj = {};

    if (map.assgnObj.address) {
      updateObj[`${this.currentActiveMapRoot}${map.id}/address`] = map.assgnObj.address;
    }
    if (map.assgnObj.users) {
      updateObj[`${this.currentActiveMapRoot}${map.id}/users`] = map.assgnObj.users;
    }
    if (_.isEmpty(map.assgnObj.started)) {
      updateObj[`${this.currentActiveMapRoot}${map.id}/started`] = moment().toDate();
    }
    if (prevOwner && owner.id != prevOwner.id) {
      updateObj[`${this.currentActiveMapRoot}${map.id}/prevOwner`] = prevOwner;
    }

    if (!_.isNull(notes)) {
      updateObj[`${this.currentActiveMapRoot}${map.id}/notes`] = notes;
    }
    updateObj[`${this.currentActiveMapRoot}${map.id}/owner`] = {id: owner.id, name: owner.name, expiry: owner.expiry};
    updateObj[`${this.currentActiveMapRoot}${map.id}/expiry`] = owner.expiry;
    updateObj[`${this.currentActiveMapRoot}${map.id}/isPersonal`] = isPersonal;

    updateObj[`${this.getUserMapPath(owner.id, map.id)}/expiry`] = owner.expiry;
    this.db.database.ref().update(updateObj);
  }

  updateUsers(map: Map, users: any[]) {
    const updateObj = {};
    const userListObj = {};
    _.forEach(users, user => {
      userListObj[user.id] = {name:user.name, expiry: user.expiry};
      updateObj[`${this.getUserMapPath(user.id, map.id)}/expiry`] = user.expiry;
    });
    updateObj[`${this.currentActiveMapRoot}${map.id}/users`] = userListObj;
    console.log(updateObj);
    this.db.database.ref().update(updateObj);
  }

  removeOwner(map: Map, prevOwner: any, notes:any = null) {
    const updateObj = {};
    if (!_.isNull(notes)) {
      updateObj[`${this.currentActiveMapRoot}${map.id}/notes`] = notes;
    }
    updateObj[`${this.currentActiveMapRoot}${map.id}/owner`] = null;
    updateObj[`${this.currentActiveMapRoot}${map.id}/expiry`] = null;
    updateObj[`${this.getUserMapPath(prevOwner.id, map.id)}`] = null;
    updateObj[`${this.currentActiveMapRoot}${map.id}/prevOwner`] = prevOwner;
    this.db.database.ref().update(updateObj);
  }

  removeUsers(map: Map, users: any) {
    const updateObj = {};
    _.forEach(users, user => {
      updateObj[`${this.getUserMapPath(user.id, map.id)}`] = null;
      updateObj[`${this.currentActiveMapRoot}${map.id}/users/${user.id}`] = null;
    });
    this.db.database.ref().update(updateObj);
  }

  updateAddrStat(mapId, addId, status, user, cb=null) {
    const updateObj: any = {};
    const nhData: any = {};
    updateObj[`${this.currentActiveMapRoot}${mapId}/address/${addId}`] = status;
    if (status == 3 || status == 4) {
      // not at home 1 or 2
      nhData.nh_when = moment().toDate();
      nhData.nh_by = user.userInfoObj.name;
      updateObj[`${this.currentActiveMapRoot}${mapId}/det/${addId}/nh_when`] = nhData.nh_when;
      updateObj[`${this.currentActiveMapRoot}${mapId}/det/${addId}/nh_by`] = nhData.nh_by;
    }
    updateObj[`${this.currentActiveMapRoot}${mapId}/lastSaved`] = {id: user.userObj.uid, name: user.userInfoObj.name, when: moment().toDate() };
    this.db.database.ref().update(updateObj).then(()=> {
      if (cb) cb(addId, status, nhData);
    });
  }

  updateAddrStats(map, user, cb=null) {
    const updateObj: any = {};
    const mapObj = map.mapObj;
    _.each(map.addresses, (addObj) => {
        const nhData: any = {};
        const mapId = mapObj.$key;
        const addId = addObj.addId;
        const status = addObj.status;
        updateObj[`${this.currentActiveMapRoot}${mapId}/address/${addId}`] = status;
        if (status == 3 || status == 4) {
          // not at home 1 or 2
          nhData.nh_when = moment().toDate();
          nhData.nh_by = user.userInfoObj.name;
          updateObj[`${this.currentActiveMapRoot}${mapId}/det/${addId}/nh_when`] = nhData.nh_when;
          updateObj[`${this.currentActiveMapRoot}${mapId}/det/${addId}/nh_by`] = nhData.nh_by;
        }
        updateObj[`${this.currentActiveMapRoot}${mapId}/lastSaved`] = {id: user.userObj.uid, name: user.userInfoObj.name, when: moment().toDate() };
    });

    // if (cb) cb(map);
    this.db.database.ref().update(updateObj).then(()=> {
      if (cb) cb(mapObj);
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
          const status = _.toNumber(map.assgnObj.address[addId]);
          switch (status) {
            case 1:
            case 2:
            case 5:
            case 7:
            case 8:
            case 9:
            case 10:
              numDone++;
              break;
            case 4:
              if (!map.mapObj.search) {
                numDone++;
              }
              break;
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

  getUserMapPath(userId, mapId:any = null) {
    if (this.metadata.mode.campaign) {
      return `/users/${userId}/campaign${_.isNull(mapId) ? '' : `/${mapId}`}`;
    } else {
      return `/users/${userId}/maps${_.isNull(mapId) ? '' : `/${mapId}`}`;
    }
  }

  getMapsUserUri() {
    if (this.metadata.mode.campaign) {
      return `campaignUsers`;
    } else {
      return `users`;
    }
  }

  isNormalMode() {
    return !this.metadata.mode.campaign;
  }

  enableGeolocation(onAddLocMarker) {
    if (navigator.geolocation) {
      this.locationWatch = navigator.geolocation.watchPosition( pos => {
        onAddLocMarker.emit({
          position: {lat: pos.coords.latitude, lng: pos.coords.longitude}
        });
      }, error => {
          console.error(error);
      });
    }
  }

  disableGeolocation(onAddLocMarker) {
    if (navigator.geolocation) {
      navigator.geolocation.clearWatch(this.locationWatch);
      onAddLocMarker.emit(null);
    }
  }

  findByTerm(path: string, term:any, param:any, isExactSearch:boolean) {
    // const ref = this.db.database.ref(path);
    // var searchRes = [];
    // const queryObservable = this
    //
    // // subscribe to changes
    // queryObservable.subscribe(queriedItems => {
    //   console.log(queriedItems);
    // });
    //
    // return qSubject.next(param);
  }

  fsgHasCompletion(fsgName) {
    return fsgName != "Search" && fsgName != "Queue";
  }

  addNewFsg(fsgName, cb) {
    const that = this;
    const updateObj = {};
    updateObj[`/fsg/list/${fsgName}`] = fsgName;
    updateObj[`/fsg/${fsgName}`] = 0;
    this.db.database.ref().update(updateObj).then(()=> {
      if (cb) cb();
    });
  }

  addNewMap(fsgName, mapName, isSearch, cb) {
    const updateObj = {};
    const terId = this.metadata.ids.terId;
    updateObj[`/maps/${terId}`] = {
      name: mapName,
      lname: _.toLower(mapName),
      fsg: fsgName,
      terId: terId
    };
    updateObj[`/fsg/${fsgName}/${terId}`] = terId;
    updateObj[`/metadata/ids/terId`] = terId + 1;
    this.db.database.ref().update(updateObj).then(()=> {
      if (cb) cb();
    });
  }

}
