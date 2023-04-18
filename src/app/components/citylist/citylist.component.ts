import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { City } from 'src/app/models/city.model';
import { WEATHERAPP_API_URL } from '../../app.constants';

@Component({
  selector: 'app-citylist',
  templateUrl: './citylist.component.html',
  styleUrls: ['./citylist.component.css']
})
export class CitylistComponent implements OnInit {

  constructor(private http: HttpClient) { }

  cities: City[] = [];

  ngOnInit(): void {
    this.loadCities();
  }

  loadCities(): void {
    this.http.get<City[]>(WEATHERAPP_API_URL+'/webresources/cityweather/')
      .subscribe(cities => this.cities = cities);
  }

  removeCity(city: City): void {
    const index = this.cities.findIndex(c => c.id === city.id);
    if (index !== -1) {
      this.http.delete(WEATHERAPP_API_URL+`/webresources/cityweather/${city.id}`)
        .subscribe(() => {
          this.cities.splice(index, 1);
        });
    }
  }
}
