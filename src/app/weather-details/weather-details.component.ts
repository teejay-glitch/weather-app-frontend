import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { WeatherService } from '../services/weather.service';
import { Routes } from 'src/enums/routes';
import { ApiResponse } from 'src/models/ApiResponse';
import { WeatherDetails } from 'src/models/WeatherDetails';

@Component({
  selector: 'app-weather-details',
  templateUrl: './weather-details.component.html',
  styleUrls: ['./weather-details.component.css'],
})
export class WeatherDetailsComponent implements OnInit, OnChanges {
  @Input() coordinates: { lon: number; lat: number } | undefined;
  weatherDetails: WeatherDetails = {} as WeatherDetails;
  isLoading: boolean = false;

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.getWeatherData();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['coordinates'] && !changes['coordinates'].firstChange) {
      this.getWeatherData();
    }
  }

  private getWeatherData(): void {
    this.isLoading = true;
    this.weatherService
      .getWeatherData(
        Routes.GET_WEATHER_DATA,
        this.coordinates ? this.coordinates : { lon: 79.8816, lat: 6.773 }
      )
      .subscribe((res: ApiResponse) => {
        this.weatherDetails = res.data ? res.data : ({} as WeatherDetails);
        this.isLoading = false;
      });
  }
}
