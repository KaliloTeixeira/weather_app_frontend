import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { City } from 'src/app/models/city.model';

@Component({
  selector: 'app-citylist',
  templateUrl: './citylist.component.html',
  styleUrls: ['./citylist.component.css']
})
export class CitylistComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.loadCities();
  }

  cities: City[] = [];

  loadCities(): void {
    this.http.get<City[]>('http://localhost:8080/Cityweather/webresources/cityweather/')
      .subscribe(cities => this.cities = cities);
  }

  removeCity(city: City): void {
    const index = this.cities.findIndex(c => c.id === city.id);
    if (index !== -1) {
      this.http.delete(`http://localhost:8080/Cityweather/webresources/cityweather/${city.id}`)
        .subscribe(() => {
          this.cities.splice(index, 1);
        });
    }
  }
}
