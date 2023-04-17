import { Component, OnInit, Input, Output, EventEmitter, ElementRef, AfterViewInit } from '@angular/core';
import { City } from '../../models/city.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cityitem',
  templateUrl: './cityitem.component.html',
  styleUrls: ['./cityitem.component.css']
})
export class CityitemComponent implements OnInit, AfterViewInit {

  constructor(private elementRef: ElementRef) { }

  @Input() city: City = { id: 0, cityname: '', temperature: 0, timestamp: new Date() };
  @Output() remove = new EventEmitter<City>();
  cityItemEl: HTMLElement | null = null;
  imageUrl: string | null = null;

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.cityItemEl = this.elementRef.nativeElement.querySelector('.city-item');
    if (this.cityItemEl) {
      const imageUrl = `https://source.unsplash.com/featured/?${this.city.cityname}`;
      this.cityItemEl.style.backgroundImage = `url(${imageUrl})`;
    }
  }
  
  removeCity(): void {
    this.remove.emit(this.city);
  }

}
