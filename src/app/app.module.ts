import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { WeatherDetailsComponent } from './weather-details/weather-details.component';
import { WeatherService } from './services/weather.service';
import { ApiService } from './services/api.service';
import { ButtonSectionComponent } from './button-section/button-section.component';

@NgModule({
  declarations: [AppComponent, WeatherDetailsComponent, ButtonSectionComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [ApiService, WeatherService],
  bootstrap: [AppComponent],
})
export class AppModule {}
