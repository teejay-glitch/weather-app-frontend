import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Options } from 'src/models/Options';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private httpClient: HttpClient) {}

  post<T>(url: string, options: any): Observable<T> {
    return this.httpClient.post<T>(url, options) as Observable<T>;
  }
}
