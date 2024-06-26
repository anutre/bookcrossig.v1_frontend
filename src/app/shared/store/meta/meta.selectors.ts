import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IMetaState, metaFeatureKey } from '@store/meta/meta.reducer';

const selectMetaState = createFeatureSelector<IMetaState>(metaFeatureKey);

export const selectIsMessageAvailable = createSelector(
  selectMetaState,
  (state: IMetaState) => state.isNewMessages,
);
