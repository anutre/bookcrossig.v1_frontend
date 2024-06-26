import { IUser } from '@shared/interfaces/IUser';
import { Action, createReducer, on } from '@ngrx/store';
import { UserApiActions, UserUiActions } from '@store/user/index';
import { IUserResponse } from '@shared/interfaces/IUserResponse';

export interface IUserState {
  user: IUser | null;
  loading: boolean;
}

export const initialState: IUserState = {
  user: null,
  loading: false,
};

export const userFeatureKey = 'USER';

const _userReducer = createReducer(
  initialState,
  on(UserUiActions.fetchUser, (state: IUserState): IUserState => {
    return {
      ...state,
      loading: true,
    };
  }),
  on(
    UserApiActions.fetchUserSuccess,
    (state: IUserState, action: { response: IUserResponse }): IUserState => {
      return {
        ...state,
        user: action.response.data.attributes.user,
        loading: false,
      };
    },
  ),
  on(UserApiActions.resendEmailConfirmationSuccess, (state: IUserState): IUserState => {
    return {
      ...state,
      loading: false,
    };
  }),
  on(
    UserApiActions.fetchUserFail,
    UserApiActions.resendEmailConfirmationFail,
    (state: IUserState): IUserState => {
      return {
        ...state,
        loading: false,
      };
    },
  ),
  on(UserUiActions.deleteUser, (state: IUserState): IUserState => {
    return {
      ...state,
      user: null,
      loading: false,
    };
  }),
);

export function userReducer(state: IUserState, action: Action) {
  return _userReducer(state, action);
}
