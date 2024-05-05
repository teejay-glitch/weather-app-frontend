import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { WeatherDetails } from 'src/models/WeatherDetails';
import { Coord } from 'src/models/WeatherDetails';
import { ApiResponse } from 'src/models/ApiResponse';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private apiService: ApiService) {}

  getWeatherData = (url: string, params: Coord): Observable<ApiResponse> => {
    return this.apiService.post(url, params);
  };
}
