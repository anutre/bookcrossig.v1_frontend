import { createAction, props } from '@ngrx/store';

import { ILoginFormData } from '@pages/auth/interfaces/ILoginFormData';
import { IRegisterFormData } from '@pages/auth/interfaces/IRegisterFormData';
import { IAuthTokens } from '@shared/interfaces/IAuthTokens';
import { EAuthActionTypes } from '@store/auth/EAuthActionTypes';
import { ITelegramAuthResponse } from '@shared/modules/oauth/interfaces/ITelegramAuthResponse';

export const login = createAction(EAuthActionTypes.LOGIN, props<{ loginData: ILoginFormData }>());

export const loginWithTelegram = createAction(
  EAuthActionTypes.LOGIN_TG,
  props<{ loginData: ITelegramAuthResponse }>(),
);

export const loginWithApple = createAction(
  EAuthActionTypes.LOGIN_APPLE,
  props<{ loginData: { id: string; code: string } }>(),
);

export const register = createAction(
  EAuthActionTypes.REGISTER,
  props<{ registerData: IRegisterFormData }>(),
);

export const logout = createAction(EAuthActionTypes.LOGOUT);

export const deleteAccount = createAction(EAuthActionTypes.DELETE_ACCOUNT);

export const setTokens = createAction(
  EAuthActionTypes.SET_TOKENS,
  props<{ tokens: IAuthTokens }>(),
);

export const authInit = createAction(EAuthActionTypes.INIT);
