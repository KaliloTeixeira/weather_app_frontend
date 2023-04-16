import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  cityName: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.cityName);
  }

}
