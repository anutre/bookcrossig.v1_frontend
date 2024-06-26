import { Injectable } from '@angular/core';
import { Geolocation, Position } from '@capacitor/geolocation';
import { from, Observable, ObservedValueOf } from 'rxjs';
import { ApiService } from '@shared/services/api.service';
import { environment } from '../../../environments/environment';
import { ApiPathConfig } from '@config/api.config';
import { IGeoCity } from '@shared/interfaces/IGeoCity';
import { PermissionStatus } from '@capacitor/geolocation/dist/esm/definitions';

@Injectable({
  providedIn: 'root',
})
export class GeoService {
  constructor(private apiService: ApiService) {}

  getCurrentPosition(): Observable<Position> {
    return from(Geolocation.getCurrentPosition());
  }

  checkpermissions(): Observable<ObservedValueOf<Promise<PermissionStatus>>> {
    return from(Geolocation.checkPermissions());
  }

  requestPermissions(): Observable<ObservedValueOf<Promise<PermissionStatus>>> {
    return from(Geolocation.requestPermissions());
  }

  getCityCloseToUser(longitude: number = -1, latitude: number = -1) {
    let url = environment.apiUrl + ApiPathConfig.geolocation;

    if (longitude !== -1 && latitude !== -1) {
      url += `?longitude=${longitude}&latitude=${latitude}`;
    }

    return this.apiService.get<IGeoCity[]>(url);
  }
}
