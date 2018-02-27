import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { RoutingModule } from './routing/routing.module';
import 'hammerjs';

import { AppComponent } from './app.component';
import { MainUIModule } from './ui/main-ui.module';
import { MATERIAL_COMPATIBILITY_MODE } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MainUIModule,
    RoutingModule
  ],
  providers: [{provide: MATERIAL_COMPATIBILITY_MODE, useValue: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
