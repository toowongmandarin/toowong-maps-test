import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { MapComponent, LoadingDialog } from './map.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MapService } from './map.service';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { MarkerClusterDirective } from './marker-cluster';
import { MdDialogModule } from '@angular/material';
import {MdSlideToggleModule} from '@angular/material';

@NgModule({
  imports:      [
    CommonModule, FormsModule, AgmCoreModule.forRoot({apiKey:'AIzaSyB6EVRDfSAHTAkrx-VmXyKU7Y3qLSuD0Ag'}),
    AngularFireDatabaseModule,
    MdDialogModule,
    MdSlideToggleModule
   ],
  declarations: [ MapComponent, MarkerClusterDirective, LoadingDialog ],
  exports:      [ MapComponent, MarkerClusterDirective ],
  providers:    [ MapService ],
  entryComponents: [ LoadingDialog ]
})
export class MapModule { }
