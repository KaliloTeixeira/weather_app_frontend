import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SearchComponent } from './components/search/search.component';
import { CitylistComponent } from './components/citylist/citylist.component';
import { CityitemComponent } from './components/cityitem/cityitem.component';
import { AddComponent } from './components/add/add.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    CitylistComponent,
    CityitemComponent,
    AddComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
