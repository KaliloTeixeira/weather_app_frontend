import { Component, OnInit } from '@angular/core';
import { City } from 'src/app/models/city.model';

@Component({
  selector: 'app-citylist',
  templateUrl: './citylist.component.html',
  styleUrls: ['./citylist.component.css']
})
export class CitylistComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  removeCity(city: City): void {
    const index = this.cities.findIndex(c => c.id === city.id);
    if (index !== -1) {
      this.cities.splice(index, 1);
    }
  }

  cities: City[] = [
    {
      id: 1,
      cityname: "Budapest",
      temperature: 287.2,
      timestamp: new Date("2023-04-16T16:27:00.387")
    },
    {
      id: 2,
      cityname: "Paris",
      temperature: 289.5,
      timestamp: new Date("2023-04-16T16:27:00.387")
    },
    {
      id: 3,
      cityname: "New York",
      temperature: 283.1,
      timestamp: new Date("2023-04-16T16:27:00.387")
    },
    {
      id: 4,
      cityname: "Tokyo",
      temperature: 290.4,
      timestamp: new Date("2023-04-16T16:27:00.387")
    },
    {
      id: 5,
      cityname: "London",
      temperature: 281.9,
      timestamp: new Date("2023-04-16T16:27:00.387")
    },
    {
      id: 6,
      cityname: "Sydney",
      temperature: 295.6,
      timestamp: new Date("2023-04-16T16:27:00.387")
    },
    {
      id: 7,
      cityname: "Dubai",
      temperature: 304.2,
      timestamp: new Date("2023-04-16T16:27:00.387")
    },
    {
      id: 8,
      cityname: "Moscow",
      temperature: 278.6,
      timestamp: new Date("2023-04-16T16:27:00.387")
    },
    {
      id: 9,
      cityname: "Rome",
      temperature: 290.1,
      timestamp: new Date("2023-04-16T16:27:00.387")
    },
    {
      id: 10,
      cityname: "Rio de Janeiro",
      temperature: 295.9,
      timestamp: new Date("2023-04-16T16:27:00.387")
    }
  ];
  
  

}
