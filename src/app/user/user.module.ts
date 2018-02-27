import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../../environments/environment';
import { AuthService } from './user.component';
import { UserInfoComponent } from './userinfo.component';
import {MatMenuModule, MatButtonModule, MatIconModule, MatCardModule, MatInputModule} from '@angular/material';
import { UserAdminComponent, SelectUserDlgComponent, CreateUserDlgComponent } from './user-admin.component';
import { TagInputModule } from 'ngx-chips';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    TagInputModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule
  ],
  exports: [ UserInfoComponent, UserAdminComponent, SelectUserDlgComponent, CreateUserDlgComponent],
  declarations: [ UserInfoComponent, UserAdminComponent, SelectUserDlgComponent, CreateUserDlgComponent ],
  bootstrap: [  ],
  providers: [ AuthService ],
  entryComponents: [ SelectUserDlgComponent, CreateUserDlgComponent ]
})
export class AuthModule {

}
