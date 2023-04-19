import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { City } from '../models/city.model';
import { WEATHERAPP_API_URL } from '../app.constants';

@Injectable({
  providedIn: 'root'
})

export class CityService {

  popupMessage: string = '';
  showPopupFlag: boolean = false;

  constructor(private http: HttpClient) { }

  getCities(): Observable<City[]> {
    return this.http.get<City[]>(WEATHERAPP_API_URL + '/webresources/cityweather/all').pipe(
      catchError((error: any) => {
        console.error('Failed to load cities', error);
        return of([]);
      })
    );
  }

  removeCity(cityId: number): Observable<void> {
    return this.http.delete<void>(WEATHERAPP_API_URL + `/webresources/cityweather/${cityId}`)
      .pipe(
        catchError((error: any) => {
          console.error('Failed to remove city', error);
          this.popupMessage = 'Failed to remove city';
          this.showPopupFlag = true;
          setTimeout(() => {
            this.showPopupFlag = false;
          }, 3000);
          return of();
        }
        )
      );
  }
}
