import { Action, createReducer, on } from '@ngrx/store';
import { MessagesApiActions, MessagesUiActions } from '@pages/messages/store/index';
import { IMessengerResponse } from '@pages/messages/interfaces/IMessengerResponse';
import { IMessengerItem } from '@pages/messages/interfaces/IMessengerItem';

export interface IMessagesState {
  loading: boolean;
  chats: IMessengerItem[];
}

export const initialState: IMessagesState = {
  loading: false,
  chats: [],
};

export const messagesFeatureKey = 'MESSAGES';

const _messagesReducer = createReducer(
  initialState,
  on(MessagesUiActions.fetchMessages, (state: IMessagesState): IMessagesState => {
    return {
      ...state,
      loading: true,
    };
  }),
  on(
    MessagesApiActions.fetchMessagesSuccess,
    (state: IMessagesState, action: { response: IMessengerResponse }): IMessagesState => {
      return {
        ...state,
        chats: action.response.data.attributes.chats,
        loading: false,
      };
    },
  ),
  on(MessagesApiActions.fetchMessagesFail, (state: IMessagesState): IMessagesState => {
    return {
      ...state,
      loading: false,
    };
  }),
);

export function messagesReducer(state: IMessagesState, action: Action) {
  return _messagesReducer(state, action);
}
