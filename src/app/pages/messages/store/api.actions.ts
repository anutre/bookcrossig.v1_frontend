import { createAction, props } from '@ngrx/store';
import { EMessagesActionTypes } from '@pages/messages/store/EMessagesActionTypes';
import { IMessengerResponse } from '@pages/messages/interfaces/IMessengerResponse';

export const fetchMessagesSuccess = createAction(
  EMessagesActionTypes.FETCH_MESSAGES_SUCCESS,
  props<{ response: IMessengerResponse }>(),
);

export const fetchMessagesFail = createAction(EMessagesActionTypes.FETCH_MESSAGES_FAIL);
