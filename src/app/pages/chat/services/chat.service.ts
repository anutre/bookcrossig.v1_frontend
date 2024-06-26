import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { ApiPathConfig } from '@config/api.config';
import { ApiService } from '@shared/services/api.service';
import { IDialogResponse } from '@pages/chat/interfaces/IDialogResponse';
import { IDialogFormData } from '@pages/chat/interfaces/IDialogFormData';
import { IDialogPayload } from '@pages/chat/interfaces/IDialogPayload';

@Injectable()
export class ChatService {
  constructor(private apiService: ApiService) {}

  fetchDialog(id: string): Observable<IDialogResponse> {
    const url = `${environment.apiUrl + ApiPathConfig.messenger}/get/${id}`;

    return this.apiService.get<IDialogResponse>(url);
  }

  submitMessage(formData: IDialogFormData, nickname: string): Observable<any> {
    const url = `${environment.apiUrl + ApiPathConfig.messenger}/new/${nickname}`;

    const loginPayload: IDialogPayload = {
      data: {
        type: 'MessengerSendRequest',
        attributes: formData,
      },
    };

    return this.apiService.post<IDialogResponse>(url, loginPayload);
  }
}
