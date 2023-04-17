import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  cityName: string = '';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  onSubmit() {
    const payload = { cityname: this.cityName.toUpperCase() };
    const headers = { 'Content-Type': 'application/json' };
    console.log(this.cityName)
    this.http.post('http://localhost:8080/Cityweather/webresources/cityweather/', payload, { headers })
      .subscribe(
        data => console.log(data),
        error => {
          console.error(error);
          alert("The City was not inserted, try it again. ERROR: " + error.message);
        }
      );
  }
  
  
  

}
