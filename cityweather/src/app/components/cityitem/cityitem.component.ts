import { Component, OnInit, Input } from '@angular/core';
import { City } from '../../models/city.model';

@Component({
  selector: 'app-cityitem',
  templateUrl: './cityitem.component.html',
  styleUrls: ['./cityitem.component.css']
})
export class CityitemComponent implements OnInit {

  constructor() { }

  @Input() city: City = { id: 0, cityname: '', temperature: 0, timestamp: new Date() };

  ngOnInit(): void {
  }
  
}
