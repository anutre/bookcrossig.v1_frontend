import { createAction, props } from '@ngrx/store';
import { EDialogUserActionTypes } from '@pages/dialog-user/store/EDialogUserActionTypes';
import { IDialogUserResponse } from '@pages/dialog-user/interfaces/IDialogUserResponse';
import { IDialogUserSubsResponse } from '@pages/dialog-user/interfaces/IDialogUserSubsResponse';

export const fetchDialogUserSuccess = createAction(
  EDialogUserActionTypes.FETCH_DIALOG_USER_SUCCESS,
  props<{ response: IDialogUserResponse }>(),
);

export const fetchDialogUserFail = createAction(EDialogUserActionTypes.FETCH_DIALOG_USER_FAIL);

export const dialogSubscribeSuccess = createAction(
  EDialogUserActionTypes.SUBSCRIBE_DIALOG_USER_SUCCESS,
  props<{ response: IDialogUserSubsResponse }>(),
);

export const dialogSubscribeFail = createAction(EDialogUserActionTypes.SUBSCRIBE_DIALOG_USER_FAIL);
