import { Component, OnInit } from '@angular/core';
import { City } from '../../models/city.model';
import { CityService } from '../../services/cityservice.service';

@Component({
  selector: 'app-citylist',
  templateUrl: './citylist.component.html',
  styleUrls: ['./citylist.component.css']
})
export class CitylistComponent implements OnInit {
  constructor(private cityService: CityService) {}

  cities: City[] = [];

  ngOnInit(): void {
    this.loadCities();
  }

  loadCities(): void {
    this.cityService.getCities().subscribe((cities: City[]) => {
      this.cities = cities;
    });
  }

  removeCity(city: City): void {
    const index = this.cities.findIndex((c: City) => c.id === city.id);
    if (index !== -1) {
      this.cityService.removeCity(city.id).subscribe(() => {
        this.cities.splice(index, 1);
      });
    }
  }
}