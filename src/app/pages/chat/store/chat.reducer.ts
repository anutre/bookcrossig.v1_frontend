import { Action, createReducer, on } from '@ngrx/store';
import { ChatApiActions, ChatUiActions } from '@pages/chat/store/index';
import { IChatUser } from '@shared/interfaces/IChatUser';
import { IDialogMessage } from '@pages/chat/interfaces/IDialogMessage';
import { IDialogResponse } from '@pages/chat/interfaces/IDialogResponse';

export interface IChatState {
  loading: boolean;
  userReceive: IChatUser | null;
  userSender: IChatUser | null;
  chat: IDialogMessage[];
}

export const initialState: IChatState = {
  loading: false,
  chat: [],
  userReceive: null,
  userSender: null,
};

export const chatFeatureKey = 'CHAT';

const _chatReducer = createReducer(
  initialState,
  on(ChatUiActions.fetchDialog, (state: IChatState): IChatState => {
    return {
      ...state,
      loading: true,
    };
  }),
  on(
    ChatApiActions.fetchDialogSuccess,
    (state: IChatState, action: { response: IDialogResponse }): IChatState => {
      return {
        ...state,
        chat: action.response.data.attributes.chat,
        userReceive: action.response.data.attributes.user_receive,
        userSender: action.response.data.attributes.user_sender,
        loading: false,
      };
    },
  ),
  on(ChatApiActions.fetchDialogFail, (state: IChatState): IChatState => {
    return {
      ...state,
      loading: false,
    };
  }),
  on(ChatUiActions.submitMessage, (state: IChatState): IChatState => {
    return {
      ...state,
      loading: true,
    };
  }),
  on(
    ChatApiActions.submitMessageSuccess,
    (state: IChatState, action: { response: IDialogResponse }): IChatState => {
      return {
        ...state,
        loading: true,
        chat: action.response.data.attributes.chat,
      };
    },
  ),
);

export function chatReducer(state: IChatState, action: Action) {
  return _chatReducer(state, action);
}
