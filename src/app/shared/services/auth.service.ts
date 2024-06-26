import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { ApiService } from '@shared/services/api.service';
import { environment } from '../../../environments/environment';
import { ApiPathConfig } from '@shared/config/api.config';
import { ILoginFormData } from '@pages/auth/interfaces/ILoginFormData';
import { ILoginPayload } from '@pages/auth/interfaces/ILoginPayload';
import { ILoginResponse } from '@pages/auth/interfaces/ILoginResponse';
import { Observable } from 'rxjs';
import { IRegisterResponse } from '@pages/auth/interfaces/IRegisterResponse';
import { IRegisterFormData } from '@pages/auth/interfaces/IRegisterFormData';
import { IRegisterPayload } from '@pages/auth/interfaces/IRegisterPayload';
import { isPlatformBrowser } from '@angular/common';
import { IAuthTokens } from '@shared/interfaces/IAuthTokens';
import { IRefreshPayload } from '@shared/interfaces/IRefreshPayload';
import { IRefreshResponse } from '@shared/interfaces/IRefreshResponse';
import { ILogoutPayload } from '@shared/interfaces/ILogoutPayload';
import { ITelegramAuthResponse } from '@shared/modules/oauth/interfaces/ITelegramAuthResponse';
import { ILoginWithTelegramPayload } from '@pages/auth/interfaces/ILoginWithTelegramPayload';
import { ILoginWithApplePayload } from '@pages/auth/interfaces/ILoginWithApplePayload';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(@Inject(PLATFORM_ID) private platformId: Object, private apiService: ApiService) {}

  login(loginData: ILoginFormData): Observable<any> {
    const url = environment.apiUrl + ApiPathConfig.login;

    const loginPayload: ILoginPayload = {
      data: {
        type: 'SSOLogin',
        attributes: loginData,
      },
    };

    return this.apiService.post<ILoginResponse>(url, loginPayload);
  }

  loginWithTelegram(loginData: ITelegramAuthResponse): Observable<ILoginResponse> {
    const url = environment.apiUrl + ApiPathConfig.loginTelegram;
    const { id = '', first_name = '', username = '', photo_url = '' } = loginData;

    const loginPayload: ILoginWithTelegramPayload = {
      data: {
        type: 'SSOTelegram',
        attributes: {
          id: id.toString(),
          first_name,
          username,
          photo_url,
        },
      },
    };

    return this.apiService.post<ILoginResponse>(url, loginPayload);
  }

  loginWithApple(loginData: { id: string; code: string }): Observable<any> {
    const url = environment.apiUrl + ApiPathConfig.loginApple;
    const { id, code } = loginData;

    const loginPayload: ILoginWithApplePayload = {
      data: {
        type: 'RegisterApple',
        attributes: {
          id,
          code,
        },
      },
    };

    return this.apiService.post<any>(url, loginPayload);
  }

  register(registerData: IRegisterFormData): Observable<IRegisterResponse> {
    const url = environment.apiUrl + ApiPathConfig.register;

    const registerPayload: IRegisterPayload = {
      data: {
        type: 'SSORegister',
        attributes: registerData,
      },
    };

    return this.apiService.post(url, registerPayload);
  }

  refreshTokens({ access, refresh }: IAuthTokens): Observable<IRefreshResponse> {
    const url = environment.apiUrl + ApiPathConfig.refresh;

    const refreshPayload: IRefreshPayload = {
      data: {
        type: 'SSORefresh',
        attributes: {
          access,
          refresh,
        },
      },
    };

    return this.apiService.post(url, refreshPayload);
  }

  logout({ access, refresh }: IAuthTokens) {
    const url = environment.apiUrl + ApiPathConfig.logout;

    const logoutPayload: ILogoutPayload = {
      data: {
        type: 'SSOLogout',
        attributes: {
          access,
          refresh,
        },
      },
    };

    return this.apiService.post(url, logoutPayload);
  }

  deleteAccount() {
    const url = environment.apiUrl + ApiPathConfig.deleteUserAccount;

    return this.apiService.delete(url);
  }

  setAuthTokens({ access, refresh }: IAuthTokens) {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('accessToken', access as string);
      localStorage.setItem('refreshToken', refresh as string);
    }
  }
}
