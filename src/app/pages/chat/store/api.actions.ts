import { createAction, props } from '@ngrx/store';
import { EChatActionTypes } from '@pages/chat/store/EChatActionTypes';
import { IDialogResponse } from '@pages/chat/interfaces/IDialogResponse';

export const fetchDialogSuccess = createAction(
  EChatActionTypes.FETCH_DIALOG_SUCCESS,
  props<{ response: IDialogResponse }>(),
);
export const fetchDialogFail = createAction(EChatActionTypes.FETCH_DIALOG_FAIL);

export const submitMessageSuccess = createAction(
  EChatActionTypes.SUBMIT_MESSAGE_SUCCESS,
  props<{ response: IDialogResponse }>(),
);

export const submitMessageFail = createAction(EChatActionTypes.SUBMIT_MESSAGE_FAIL);
