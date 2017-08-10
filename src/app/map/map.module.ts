import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { MapComponent, AddressDlgComponent, AddressListDlgComponent } from './map.component';
import { MapsListComponent } from './mapslist.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MapService } from './map.service';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { LoadingDialog } from './loading-diag.component';
import { MarkerClusterDirective } from './marker-cluster';
import { MdRadioModule, MdInputModule, MdAutocompleteModule, MdDialogModule, MdListModule, MdSlideToggleModule, MdCardModule, MdChipsModule, MdButtonModule, MdToolbarModule, MdIconModule, MdButtonToggleModule, MdSelectModule } from '@angular/material';
import { CovalentExpansionPanelModule, CovalentMessageModule } from '@covalent/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthModule } from '../user/user.module';
import { WindowRef } from './windowref.service';
import { MapShareComponent, MapShareDlgComponent } from './map-share.component';
import { TagInputModule } from 'ngx-chips';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
@NgModule({
  imports:      [
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    TagInputModule,
    AgmCoreModule.forRoot({apiKey:'AIzaSyB6EVRDfSAHTAkrx-VmXyKU7Y3qLSuD0Ag'}),
    AngularFireDatabaseModule,
    MdDialogModule,
    MdSlideToggleModule,
    MdListModule,
    MdCardModule,
    MdChipsModule,
    MdButtonModule,
    MdToolbarModule,
    MdButtonToggleModule,
    MdIconModule,
    MdSelectModule,
    MdAutocompleteModule,
    MdInputModule,
    MdRadioModule,
    HttpModule,
    RouterModule,
    CovalentExpansionPanelModule,
    CovalentMessageModule,
    AuthModule
   ],
  declarations: [ MapComponent, MapsListComponent, MarkerClusterDirective, LoadingDialog, MapShareComponent, MapShareDlgComponent, AddressDlgComponent, AddressListDlgComponent ],
  exports:      [ MapComponent, MapsListComponent, MarkerClusterDirective, MapShareComponent, MapShareDlgComponent, AddressDlgComponent, AddressListDlgComponent ],
  providers:    [ MapService, WindowRef ],
  entryComponents: [ LoadingDialog, MapShareDlgComponent, AddressDlgComponent, AddressListDlgComponent ]
})
export class MapModule { }
