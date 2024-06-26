import { createAction, props } from '@ngrx/store';
import { EChatActionTypes } from '@pages/chat/store/EChatActionTypes';
import { IDialogFormData } from '@pages/chat/interfaces/IDialogFormData';

export const chatInit = createAction(EChatActionTypes.INIT, props<{ id: string }>());

export const fetchDialog = createAction(EChatActionTypes.FETCH_DIALOG, props<{ id: string }>());

export const submitMessage = createAction(
  EChatActionTypes.SUBMIT_MESSAGE,
  props<{ formData: IDialogFormData }>(),
);
