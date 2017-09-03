import { Directive, Input, OnInit, Output, EventEmitter, SimpleChanges, OnChanges } from '@angular/core';
import { GoogleMapsAPIWrapper } from '@agm/core';
import { Observable } from 'rxjs';
import * as _ from "lodash";

import './markerclusterer.js';

declare const google;
declare const MarkerClusterer;

@Directive({
  selector: 'marker-cluster'
})
export class MarkerClusterDirective implements OnInit, OnChanges {
  @Input() public points: any[];
  @Input() protected onUpdate: EventEmitter<any>;
  @Input() protected onFit: EventEmitter<any>;
  @Input() protected onSetShowClusterInfo: EventEmitter<boolean>;
  @Input() protected onClear: EventEmitter<boolean>;
  @Input() protected onAddressClick: EventEmitter<any>;
  @Input() protected onAddLocMarker: EventEmitter<any>;

  public markerCluster: any;
  public markers: any[] = [];
  public scaledMarkerSize;
  maxTypeIdx: number = 3;
  maxColorIdx: number = 3;
  @Input() markerIcons: any[] = [];
  bounds: any;
  locationMarker: any;

  @Input() style:any = {
    url: '/assets/images/place-markers/cluster.png',
    height: 40,
    width: 40,
    textColor: '#FFF',
    textSize: 11,
    backgroundPosition: 'center center'
  };

  @Input() options: any = {
    imagePath: '/assets/images/place-markers/cluster',
    gridSize: 20,
    minimumClusterSize: 2,
    styles: [this.style, this.style, this.style]
  };

  @Input() minimumClusterSize: number = 2;

  constructor(private gmapsApi: GoogleMapsAPIWrapper) {
  }

  public ngOnInit() {
    this.onUpdate.subscribe(data=> {
      this.clearMarkers();
      this.loadPoints();
    });
    this.onSetShowClusterInfo.subscribe(showStat => {
      this.markerCluster.setShowInfo(showStat);
    });
    if (this.onFit) {
      this.onFit.subscribe(trigger => {
        this.fitBounds();
      });
    }
    if (this.onClear) {
      this.onClear.subscribe(trigger => {
        this.clearMarkers();
      });
    }
    if (this.onAddLocMarker) {
      this.onAddLocMarker.subscribe(markerConfig => {
        this.gmapsApi.getNativeMap().then((map) => {
          this.resetBounds();
          if (!this.locationMarker) {
            this.locationMarker = new google.maps.Marker({
              position: markerConfig.position,
              map: map,
              icon: markerConfig.iconUrl,
              optimized:false
            });
            this.bounds.extend(this.locationMarker.getPosition());
          } else {
            if (markerConfig) {
              var latlng = new google.maps.LatLng(markerConfig.position.lat, markerConfig.position.lng);
              this.locationMarker.setPosition(latlng);
              this.bounds.extend(this.locationMarker.getPosition());
            } else {
              this.locationMarker.setMap(null);
              this.locationMarker = null;
            }
          }
        });
      });
    }
  }

  public resetBounds() {
    this.bounds = new google.maps.LatLngBounds();
    _.forEach(this.markers, marker => {
      this.bounds.extend(marker.getPosition());
    });
  }


  public ngOnChanges(changes: SimpleChanges) {
    this.clearMarkers();
    this.loadPoints();
  }

  public loadPoints() {
    if (!this.points || this.points.length == 0) {
      console.log(`No points to load...`);
      return;
    }
    this.bounds = new google.maps.LatLngBounds(); // empty bounds object
    this.gmapsApi.getNativeMap().then((map) => {
      if (_.isEmpty(this.markerIcons)) {
        this.scaledMarkerSize = new google.maps.Size(35, 35);
        for (let t = 0; t <= this.maxTypeIdx; t++) {
          for (let c = 0; c <= this.maxColorIdx; c++) {
            const pinUrl = `/assets/images/place-markers/pin-${t}-${c}.svg`;
            this.markerIcons.push({scaledSize: this.scaledMarkerSize, url: pinUrl});
          }
        }
      }

      Observable
        .interval(500)
        .skipWhile((s) => this.points == null || this.points.length <= 0)
        .take(1)
        .subscribe(() => {
          if (this.points.length > 0) {
            console.log(`Painting markers...`);
            const clickEmitter = this.onAddressClick;
            for (const point of this.points) {
              let marker = new google.maps.Marker({
                position: new google.maps.LatLng(point.addObj.clat, point.addObj.clong),
                icon: this.markerIcons[point.markerIdx % this.markerIcons.length]
              });
              if (point.marker) {
                marker = point.marker;
              }

              if (point.modalMode) {
                marker.addListener('click', function() {
                  clickEmitter.emit({gmap: map, gmarker: marker, addrMarker: point});
                });
              } else {
                const contentString = `<div id="info-window">${point.infoWindowStr}</div>`;
                marker.infoWindowStr = point.infoWindowStr;
                const infowindow = new google.maps.InfoWindow({
                  content: contentString
                });

                marker.addListener('click', function() {
                  infowindow.open(map, marker);
                });
              }

              // marker.addListener('mouseout', function() {
              //   infowindow.close(map, marker);
              // });

              this.markers.push(marker);
              this.bounds.extend(marker.getPosition());
            }
          } else {
            this.markers = [];
          }
          this.options.minimumClusterSize = this.minimumClusterSize;
          this.markerCluster = new MarkerClusterer(map, this.markers, this.options);
          map.setCenter(this.bounds.getCenter());
          map.fitBounds(this.bounds);
        });
    });
  }

  public clearMarkers() {
    if (this.markerCluster) {
      this.markers = [];
      this.markerCluster.clearMarkers();
    }
  }

  public fitBounds() {
    this.gmapsApi.getNativeMap().then((map) => {
      map.setCenter(this.bounds.getCenter());
      map.fitBounds(this.bounds);
    });
  }
}
