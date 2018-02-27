import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { environment } from '../../environments/environment';
import { MatButtonModule, MatCheckboxModule, MatIconModule, MatGridListModule, MatInputModule, MatListModule, MatToolbarModule } from '@angular/material';
import { HomeComponent, NotifyDlgComponent } from './home.component';
import { LoginComponent } from './login.component';
import { AuthModule } from '../user/user.module';
import { MapModule } from '../map/map.module';
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatDialogModule } from '@angular/material';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatDialogModule,
    AuthModule,
    MapModule,
    RouterModule
  ],
  declarations: [
    HomeComponent,
    LoginComponent,
    NotifyDlgComponent
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
    LoginComponent,
    NotifyDlgComponent
  ]
})
export class MainUIModule {
}
