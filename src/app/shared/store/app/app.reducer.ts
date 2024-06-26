import { Action, createReducer, on } from '@ngrx/store';
import { AppUiActions } from '@store/app/index';

export interface IGlobalState {
  loading: boolean;
}

export const initialState: IGlobalState = {
  loading: true,
};

export const appFeatureKey = 'APP';

const _appReducer = createReducer(
  initialState,
  on(AppUiActions.appInit, (state: IGlobalState): IGlobalState => {
    return {
      ...state,
      loading: false,
    };
  }),
);

export function appReducer(state: IGlobalState, action: Action) {
  return _appReducer(state, action);
}
