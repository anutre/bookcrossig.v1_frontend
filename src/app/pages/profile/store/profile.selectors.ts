import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IProfileState, profileFeatureKey } from '@pages/profile/store/profile.reducer';

const selectProfileState = createFeatureSelector<IProfileState>(profileFeatureKey);

export const selectProfile = createSelector(selectProfileState, (state: IProfileState) => state);

export const selectPersonalDetails = createSelector(
  selectProfileState,
  (state: IProfileState) => state.personalDetails,
);

export const selectProfileAddedBooks = createSelector(
  selectProfileState,
  (state: IProfileState) => state.books.added,
);

export const selectProfileViewedBooks = createSelector(
  selectProfileState,
  (state: IProfileState) => state.books.viewed,
);
