import { Injectable } from '@angular/core';

import { environment } from '../../../environments/environment';
import { ApiPathConfig } from '@config/api.config';
import { ApiService } from '@shared/services/api.service';
import { IUserResponse } from '@shared/interfaces/IUserResponse';

@Injectable()
export class UserService {
  constructor(private apiService: ApiService) {}

  fetchUser() {
    const url = environment.apiUrl + ApiPathConfig.me;

    return this.apiService.get<IUserResponse>(url);
  }

  resendConfirmationMail() {
    const url = environment.apiUrl + ApiPathConfig.emailConfirmationResubmit;

    return this.apiService.post<any>(url, {});
  }
}
