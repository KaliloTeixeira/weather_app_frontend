import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WEATHERAPP_API_URL } from '../../app.constants';
import Bugsnag from '@bugsnag/js';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  cityName: string = '';
  @Output() cityAdded = new EventEmitter<void>();

  popupMessage: string = '';
  showPopupFlag: boolean = false;
  
  constructor(private http: HttpClient) { }
  
  ngOnInit(): void {
  }

  onSubmit() {
    const payload = { cityname: this.cityName.toUpperCase() };
    const headers = { 'Content-Type': 'application/json' };
    console.log(this.cityName);
    this.http.post(WEATHERAPP_API_URL + '/webresources/cityweather/', payload, { headers })
      .subscribe({
        next: data => {
          console.log(data);
          // Reload the city list by emitting an event to the parent component
          this.cityAdded.emit();
          this.popupMessage = 'New city added successfully!';
          this.showPopupFlag = true;
          setTimeout(() => {
            this.showPopupFlag = false;
          }, 3000);
        },
        error: error => {
          console.error("error adding:", error);
          this.popupMessage = 'The city was not added, try again!';
          this.showPopupFlag = true;
          setTimeout(() => {
            this.showPopupFlag = false;
          }, 3000);
          throw error;
        }
      });
  }
}