import { IMetaCounter } from '@shared/interfaces/IMetaCounter';
import { Action, createReducer, on } from '@ngrx/store';
import { MetaApiActions, MetaUiActions } from '@store/meta/index';

export interface IMetaState {
  isNewMessages: boolean;
}

export const initialState: IMetaState = {
  isNewMessages: false,
};

export const metaFeatureKey = 'META';

const _metaReducer = createReducer(
  initialState,
  on(MetaUiActions.fetchMetaCounter, (state: IMetaState): IMetaState => {
    return {
      ...state,
    };
  }),
  on(MetaUiActions.unmarkMetaMessages, (state: IMetaState): IMetaState => {
    return {
      ...state,
      isNewMessages: false,
    };
  }),
  on(
    MetaApiActions.fetchMetaCounterSuccess,
    (state: IMetaState, action: { response: IMetaCounter }): IMetaState => {
      return {
        ...state,
        isNewMessages: action.response.data.attributes.new_messages,
      };
    },
  ),
  on(MetaApiActions.fetchMetaCounterFail, (state: IMetaState): IMetaState => {
    return {
      ...state,
    };
  }),
);

export function metaReducer(state: IMetaState, action: Action) {
  return _metaReducer(state, action);
}
