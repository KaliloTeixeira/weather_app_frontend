import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import Bugsnag from '@bugsnag/js';
import { BugsnagErrorHandler } from '@bugsnag/plugin-angular';
import { BUGSNAG_API_KEY } from './app.constants';

import { AppComponent } from './app.component';
import { CitylistComponent } from './components/citylist/citylist.component';
import { CityitemComponent } from './components/cityitem/cityitem.component';
import { AddComponent } from './components/add/add.component';
import { PopupComponent } from './components/popup/popup.component';

Bugsnag.start({ apiKey: BUGSNAG_API_KEY })

export function errorHandlerFactory() {
  return new BugsnagErrorHandler();
}

@NgModule({
  declarations: [
    AppComponent,
    CitylistComponent,
    CityitemComponent,
    AddComponent,
    PopupComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    { provide: ErrorHandler, useFactory: errorHandlerFactory }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
