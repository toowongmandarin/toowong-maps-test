import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { MapComponent, AddressDlgComponent, AddressListDlgComponent, MapEditDlgComponent } from './map.component';
import { MapsListComponent } from './mapslist.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MapService } from './map.service';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { LoadingDialog } from './loading-diag.component';
import { MarkerClusterDirective } from './marker-cluster';
import { MatCheckboxModule, MatTabsModule, MatMenuModule, MatProgressBarModule, MatRadioModule, MatInputModule, MatAutocompleteModule, MatDialogModule, MatListModule, MatSlideToggleModule, MatCardModule, MatChipsModule, MatButtonModule, MatToolbarModule, MatIconModule, MatButtonToggleModule, MatSelectModule, MatTableModule } from '@angular/material';
import { CovalentExpansionPanelModule, CovalentMessageModule } from '@covalent/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthModule } from '../user/user.module';
import { WindowRef } from './windowref.service';
import { MapShareComponent, MapShareDlgComponent, MapReturnConfirmDlgComponent } from './map-share.component';
import { TagInputModule } from 'ngx-chips';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { MapAdminComponent } from './map-admin.component';
import { MapSearchComponent } from './map-search.component'

@NgModule({
  imports:      [
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    TagInputModule,
    AgmCoreModule.forRoot({apiKey:'AIzaSyB6EVRDfSAHTAkrx-VmXyKU7Y3qLSuD0Ag'}),
    AngularFireDatabaseModule,
    MatDialogModule,
    MatSlideToggleModule,
    MatListModule,
    MatCardModule,
    MatChipsModule,
    MatButtonModule,
    MatToolbarModule,
    MatButtonToggleModule,
    MatIconModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatInputModule,
    MatRadioModule,
    MatProgressBarModule,
    MatMenuModule,
    HttpModule,
    RouterModule,
    CovalentExpansionPanelModule,
    CovalentMessageModule,
    AuthModule,
    MatTabsModule,
    MatCheckboxModule,
    MatTableModule
   ],
  declarations: [ MapComponent, MapsListComponent, MarkerClusterDirective, LoadingDialog, MapShareComponent, MapShareDlgComponent, AddressDlgComponent, AddressListDlgComponent, MapReturnConfirmDlgComponent, MapAdminComponent, MapSearchComponent, MapEditDlgComponent],
  exports:      [ MapComponent, MapsListComponent, MapShareComponent, MapShareDlgComponent, AddressDlgComponent, AddressListDlgComponent, MapReturnConfirmDlgComponent, MarkerClusterDirective, MapAdminComponent, MapSearchComponent, MapEditDlgComponent ],
  providers:    [ MapService, WindowRef ],
  entryComponents: [ LoadingDialog, MapShareDlgComponent, AddressDlgComponent, AddressListDlgComponent, MapReturnConfirmDlgComponent, MapAdminComponent, MapSearchComponent, MapEditDlgComponent ]
})
export class MapModule { }
