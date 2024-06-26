import { createAction, props } from '@ngrx/store';
import { EDialogUserActionTypes } from '@pages/dialog-user/store/EDialogUserActionTypes';

export const dialogUserInit = createAction(EDialogUserActionTypes.INIT, props<{ id: string }>());

export const fetchDialogUser = createAction(
  EDialogUserActionTypes.FETCH_DIALOG_USER,
  props<{ id: string }>(),
);

export const subscribeOnDialogUser = createAction(EDialogUserActionTypes.SUBSCRIBE_DIALOG_USER);
