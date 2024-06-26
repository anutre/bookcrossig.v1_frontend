import { Injectable } from '@angular/core';
import { ApiService } from '@shared/services/api.service';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { ApiPathConfig } from '@config/api.config';
import { IMessengerResponse } from '@pages/messages/interfaces/IMessengerResponse';

@Injectable()
export class MessengerService {
  constructor(private apiService: ApiService) {}

  fetchChats(): Observable<IMessengerResponse> {
    const url = `${environment.apiUrl + ApiPathConfig.messenger}/all`;

    return this.apiService.get<IMessengerResponse>(url);
  }
}
