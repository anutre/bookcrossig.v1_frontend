import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  dialogUserFeatureKey,
  IDialogUserState,
} from '@pages/dialog-user/store/dialog-user.reducer';

const selectDialogUserState = createFeatureSelector<IDialogUserState>(dialogUserFeatureKey);

export const selectIsDialogUserLoading = createSelector(
  selectDialogUserState,
  (state: IDialogUserState) => state.loading,
);

export const selectDialogUser = createSelector(
  selectDialogUserState,
  (state: IDialogUserState) => state.user,
);

export const selectDialogUserSubs = createSelector(
  selectDialogUserState,
  (state: IDialogUserState) => state.subscribe,
);

export const selectDialogUserBooks = createSelector(
  selectDialogUserState,
  (state: IDialogUserState) => state.books,
);
