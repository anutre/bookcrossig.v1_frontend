import { createAction } from '@ngrx/store';
import { EUSerActionTypes } from '@store/user/EUSerActionTypes';

export const fetchUser = createAction(EUSerActionTypes.FETCH_USER);

export const deleteUser = createAction(EUSerActionTypes.DELETE_USER);

export const resendEmailConfirmation = createAction(EUSerActionTypes.RESEND_CONFIRMATION_EMAIL);
