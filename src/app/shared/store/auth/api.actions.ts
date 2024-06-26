import { createAction, props } from '@ngrx/store';
import { ILoginResponse } from '@pages/auth/interfaces/ILoginResponse';
import { IRegisterResponse } from '@pages/auth/interfaces/IRegisterResponse';
import { EAuthActionTypes } from '@store/auth/EAuthActionTypes';

export const loginSuccess = createAction(
  EAuthActionTypes.LOGIN_SUCCESS,
  props<{ response: ILoginResponse }>(),
);

export const loginFail = createAction(EAuthActionTypes.LOGIN_FAIL);

export const loginWithTelegramSuccess = createAction(
  EAuthActionTypes.LOGIN_TG_SUCCESS,
  props<{ response: ILoginResponse }>(),
);

export const loginWithTelegramFail = createAction(EAuthActionTypes.LOGIN_TG_FAIL);

export const loginWithAppleSuccess = createAction(
  EAuthActionTypes.LOGIN_APPLE_SUCCESS,
  props<{ response: ILoginResponse }>(),
);

export const loginWithAppleFail = createAction(EAuthActionTypes.LOGIN_APPLE_FAIL);

export const registerSuccess = createAction(
  EAuthActionTypes.REGISTER_SUCCESS,
  props<{ response: IRegisterResponse }>(),
);

export const registerFail = createAction(EAuthActionTypes.REGISTER_FAIL);

export const logoutSuccess = createAction(EAuthActionTypes.LOGOUT_SUCCESS);

export const logoutFail = createAction(EAuthActionTypes.LOGOUT_FAIL);

export const deleteAccSuccess = createAction(EAuthActionTypes.DELETE_ACCOUNT_SUCCESS);

export const deleteAccFail = createAction(EAuthActionTypes.DELETE_ACCOUNT_FAIL);
