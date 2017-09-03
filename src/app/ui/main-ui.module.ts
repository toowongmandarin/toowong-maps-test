import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { environment } from '../../environments/environment';
import { MdButtonModule, MdCheckboxModule, MdIconModule, MdGridListModule, MdInputModule, MdListModule, MdToolbarModule } from '@angular/material';
import { HomeComponent } from './home.component';
import { LoginComponent } from './login.component';
import { AuthModule } from '../user/user.module';
import { MapModule } from '../map/map.module';
import { FlexLayoutModule } from "@angular/flex-layout";
import { MdDialogModule } from '@angular/material';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MdButtonModule,
    MdCheckboxModule,
    MdIconModule,
    MdInputModule,
    MdListModule,
    MdToolbarModule,
    FlexLayoutModule,
    MdDialogModule,
    AuthModule,
    MapModule,
    RouterModule
  ],
  declarations: [
    HomeComponent,
    LoginComponent
  ],
  exports: [
    CommonModule,
    FormsModule,
    MapModule,
    HomeComponent,
    LoginComponent,
    AuthModule
  ],
  providers: [
  ],
  entryComponents: [
    LoginComponent
  ]
})
export class MainUIModule {
}
