import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  coordinates: { lon: number; lat: number } | undefined;

  constructor() {}

  getCityCoordinates(lon: number, lat: number): void {
    this.coordinates = { lon, lat };
  }
}
