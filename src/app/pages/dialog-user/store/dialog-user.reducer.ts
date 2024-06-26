import { Action, createReducer, on } from '@ngrx/store';
import { DialogUserApiActions, DialogUserUiActions } from '@pages/dialog-user/store/index';
import { IDialogUserResponse } from '@pages/dialog-user/interfaces/IDialogUserResponse';
import { IBook } from '@shared/interfaces/IBook';
import { IDialogUser } from '@pages/dialog-user/interfaces/IDialogUser';
import { IDialogUserSubsResponse } from '@pages/dialog-user/interfaces/IDialogUserSubsResponse';

export interface IDialogUserState {
  loading: boolean;
  books: IBook[];
  user: IDialogUser | null;
  subscribe: boolean;
}

export const initialState: IDialogUserState = {
  loading: false,
  books: [],
  user: null,
  subscribe: false,
};

export const dialogUserFeatureKey = 'DIAlOG_USER';

const _dialogUserReducer = createReducer(
  initialState,
  on(
    DialogUserUiActions.fetchDialogUser,
    DialogUserUiActions.subscribeOnDialogUser,
    (state: IDialogUserState): IDialogUserState => {
      return {
        ...state,
        loading: true,
      };
    },
  ),
  on(
    DialogUserApiActions.fetchDialogUserSuccess,
    (state: IDialogUserState, action: { response: IDialogUserResponse }): IDialogUserState => {
      return {
        ...state,
        books: action.response.data.attributes.books,
        user: action.response.data.attributes.user,
        subscribe: action.response.data.attributes.subscribe,
      };
    },
  ),
  on(
    DialogUserApiActions.fetchDialogUserFail,
    DialogUserApiActions.dialogSubscribeFail,
    (state: IDialogUserState): IDialogUserState => {
      return {
        ...state,
        loading: false,
      };
    },
  ),
  on(
    DialogUserApiActions.dialogSubscribeSuccess,
    (state: IDialogUserState, action: { response: IDialogUserSubsResponse }): IDialogUserState => {
      return {
        ...state,
        subscribe: action.response.data.attributes.subscription,
        loading: false,
      };
    },
  ),
);

export function dialogUserReducer(state: IDialogUserState, action: Action) {
  return _dialogUserReducer(state, action);
}
