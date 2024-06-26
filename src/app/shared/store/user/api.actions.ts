import { createAction, props } from '@ngrx/store';
import { IUserResponse } from '@shared/interfaces/IUserResponse';
import { EUSerActionTypes } from '@store/user/EUSerActionTypes';

export const fetchUserSuccess = createAction(
  EUSerActionTypes.FETCH_USER_SUCCESS,
  props<{ response: IUserResponse }>(),
);

export const fetchUserFail = createAction(EUSerActionTypes.FETCH_USER_FAIL);

export const resendEmailConfirmationSuccess = createAction(
  EUSerActionTypes.RESEND_CONFIRMATION_EMAIL_SUCCESS,
  props<{ response: any }>(),
);

export const resendEmailConfirmationFail = createAction(
  EUSerActionTypes.RESEND_CONFIRMATION_EMAIL_FAIL,
);
