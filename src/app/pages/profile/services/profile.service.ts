import { Injectable } from '@angular/core';
import { ApiService } from '@shared/services/api.service';
import { environment } from '../../../../environments/environment';
import { ApiPathConfig } from '@config/api.config';
import { IPersonalDetailsResponse } from '@pages/profile/interfaces/IPersonalDetailsResponse';
import { IPayloadUpdatePersonalDetails } from '@pages/profile/interfaces/IPayloadUpdatePesonalDetails';
import { Observable } from 'rxjs';

@Injectable()
export class ProfileService {
  constructor(private apiService: ApiService) {}

  fetchPersonalDetails() {
    const url = environment.apiUrl + ApiPathConfig.dialogUser;

    return this.apiService.get<IPersonalDetailsResponse>(url);
  }

  fetchProfileAddedBooks(): Observable<any> {
    const url = `${environment.apiUrl + ApiPathConfig.userBooksAdded}`;

    return this.apiService.get<any>(url);
  }

  fetchProfileViewedBooks(): Observable<any> {
    const url = `${environment.apiUrl + ApiPathConfig.userBooksViewed}`;

    return this.apiService.get<any>(url);
  }

  updatePersonalDetails(data: IPayloadUpdatePersonalDetails) {
    const url = environment.apiUrl + ApiPathConfig.dialogUser;

    return this.apiService.patch<any>(url, data);
  }
}
