import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { environment } from '../../environments/environment';
import { MdButtonModule, MdCheckboxModule, MdIconModule, MdGridListModule, MdInputModule, MdListModule } from '@angular/material';
import { HomeComponent } from './home.component';
import { LoginComponent } from './login.component';
import { FireModule } from '../fire/fire.module';
import { MapModule } from '../map/map.module';
import { FlexLayoutModule } from "@angular/flex-layout";
import { MdDialogModule } from '@angular/material';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MdButtonModule,
    MdCheckboxModule,
    MdIconModule,
    MdInputModule,
    MdListModule,
    FlexLayoutModule,
    MdDialogModule,
    FireModule,
    MapModule
  ],
  declarations: [
    HomeComponent,
    LoginComponent,
    LoginComponent
  ],
  exports: [
    CommonModule,
    FormsModule,
    MapModule,
    HomeComponent,
    LoginComponent
  ],
  providers: [

  ],
  entryComponents: [
    LoginComponent
  ]
})
export class MainUIModule {
}
