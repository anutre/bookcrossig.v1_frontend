import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IUserState, userFeatureKey } from './user.reducer';

const selectUserState = createFeatureSelector<IUserState>(userFeatureKey);

export const selectIsUserLoading = createSelector(
  selectUserState,
  (state: IUserState) => state.loading,
);

export const selectUser = createSelector(selectUserState, (state: IUserState) => state.user);
