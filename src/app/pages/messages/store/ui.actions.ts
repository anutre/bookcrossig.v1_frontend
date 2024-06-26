import { createAction } from '@ngrx/store';
import { EMessagesActionTypes } from '@pages/messages/store/EMessagesActionTypes';

export const messagesInit = createAction(EMessagesActionTypes.INIT);

export const fetchMessages = createAction(EMessagesActionTypes.FETCH_MESSAGES);
