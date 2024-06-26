import { Action, createReducer, on } from '@ngrx/store';

import * as HttpErrorActions from './http-error.actions';

export interface HttpErrorState {
  error: {
    status: number;
    message: string;
  } | null;
}

const initialState: HttpErrorState = {
  error: null,
};

export const httpErrorFeatureKey = 'httpError';

const _httpErrorReducer = createReducer(
  initialState,
  on(HttpErrorActions.handleHttpError, (state: HttpErrorState, action): HttpErrorState => {
    return {
      ...state,
      error: { ...action.error },
    };
  }),
  on(HttpErrorActions.clearHttpError, (state: HttpErrorState): HttpErrorState => {
    return {
      ...state,
      error: null,
    };
  }),
);

export function httpErrorReducer(state: HttpErrorState, action: Action) {
  return _httpErrorReducer(state, action);
}
