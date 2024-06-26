import { Action, createReducer, on } from '@ngrx/store';
import { AuthApiActions, AuthUIActions } from '@store/auth/index';
import { ILoginResponse } from '@pages/auth/interfaces/ILoginResponse';
import { IRegisterResponse } from '@pages/auth/interfaces/IRegisterResponse';
import { IAuthTokens } from '@shared/interfaces/IAuthTokens';

export interface IAuthState {
  accessToken: string | null;
  refreshToken: string | null;
  loading: boolean;
  isAuth: boolean;
}

export const initialState: IAuthState = {
  accessToken: null,
  refreshToken: null,
  loading: false,
  isAuth: false,
};

export const authFeatureKey = 'AUTH';

const _authReducer = createReducer(
  initialState,
  on(
    AuthUIActions.login,
    AuthUIActions.loginWithTelegram,
    AuthUIActions.loginWithApple,
    AuthUIActions.register,
    (state: IAuthState): IAuthState => {
      return {
        ...state,
        loading: true,
      };
    },
  ),
  on(AuthUIActions.logout, AuthUIActions.deleteAccount, (state: IAuthState): IAuthState => {
    return {
      ...state,
      loading: true,
    };
  }),
  on(
    AuthApiActions.logoutSuccess,
    AuthApiActions.deleteAccSuccess,
    (state: IAuthState): IAuthState => {
      return {
        ...state,
        loading: false,
        isAuth: false,
        accessToken: null,
        refreshToken: null,
      };
    },
  ),
  on(AuthApiActions.logoutFail, AuthApiActions.deleteAccFail, (state: IAuthState): IAuthState => {
    return {
      ...state,
      loading: false,
    };
  }),
  on(
    AuthApiActions.loginSuccess,
    AuthApiActions.loginWithTelegramSuccess,
    AuthApiActions.loginWithAppleSuccess,
    (state: IAuthState, action: { response: ILoginResponse }): IAuthState => {
      return {
        ...state,
        accessToken: action.response.data.attributes.tokens.access,
        refreshToken: action.response.data.attributes.tokens.refresh,
        isAuth: true,
        loading: false,
      };
    },
  ),
  on(
    AuthApiActions.registerSuccess,
    (state: IAuthState, action: { response: IRegisterResponse }): IAuthState => {
      return {
        ...state,
        accessToken: action.response.data.attributes.tokens.access,
        refreshToken: action.response.data.attributes.tokens.refresh,
        isAuth: true,
        loading: false,
      };
    },
  ),
  on(
    AuthApiActions.loginFail,
    AuthApiActions.loginWithTelegramFail,
    AuthApiActions.loginWithAppleFail,
    AuthApiActions.registerFail,
    (state: IAuthState): IAuthState => {
      return {
        ...state,
        loading: false,
      };
    },
  ),
  on(AuthUIActions.setTokens, (state: IAuthState, action: { tokens: IAuthTokens }): IAuthState => {
    const isAuth = !!(action.tokens.access && action.tokens.refresh);

    return {
      ...state,
      isAuth,
      accessToken: action.tokens.access,
      refreshToken: action.tokens.refresh,
    };
  }),
);

export function authReducer(state: IAuthState, action: Action) {
  return _authReducer(state, action);
}
