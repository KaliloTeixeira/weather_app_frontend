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
    }
  ];
  

}
