import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { ApiPathConfig } from '@config/api.config';
import { ApiService } from '@shared/services/api.service';
import { IDialogUserResponse } from '@pages/dialog-user/interfaces/IDialogUserResponse';
import { IDialogUserSubsResponse } from '@pages/dialog-user/interfaces/IDialogUserSubsResponse';

@Injectable({
  providedIn: 'root',
})
export class DialogUserService {
  constructor(private apiService: ApiService) {}

  fetchDialogUser(id: string): Observable<IDialogUserResponse> {
    const url = `${environment.apiUrl + ApiPathConfig.dialogUser}/${id}`;

    return this.apiService.get<IDialogUserResponse>(url);
  }

  subscribeOnDialogUser(userId: string | null): Observable<IDialogUserSubsResponse> {
    const url = `${environment.apiUrl + ApiPathConfig.dialogUserSubs}/${userId}`;

    return this.apiService.post<IDialogUserSubsResponse>(url, {});
  }
}
