import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  get<T>(path: string): Observable<T> {
    return this.http.get(path) as Observable<T>;
  }

  post<T>(path: string, data: { [key: string]: any }): Observable<T> {
    return this.http.post(path, data) as Observable<T>;
  }

  patch<T>(path: string, data: { [key: string]: any }): Observable<T> {
    return this.http.patch(path, data) as Observable<T>;
  }

  put<T>(path: string, data: { [key: string]: any }): Observable<T> {
    return this.http.put(path, data) as Observable<T>;
  }

  delete<T>(path: string): Observable<T> {
    return this.http.delete(path) as Observable<T>;
  }
}
