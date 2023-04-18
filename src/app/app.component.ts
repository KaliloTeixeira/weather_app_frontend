import { Component, ViewChild } from '@angular/core';
import { CitylistComponent } from './components/citylist/citylist.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cityweather';

  @ViewChild(CitylistComponent) cityList!: CitylistComponent;

  reloadCityList() {
    this.cityList.loadCities();
  }
  
}
