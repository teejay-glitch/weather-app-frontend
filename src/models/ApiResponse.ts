import { WeatherDetails } from './WeatherDetails';

export interface ApiResponse {
  success: boolean;
  message: string;
  data?: WeatherDetails;
  error?: string;
}
