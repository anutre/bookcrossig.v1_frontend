import { createFeatureSelector, createSelector } from '@ngrx/store';
import { bookFeatureKey, IBookState } from '@pages/book/store/book.reducer';

const selectBookState = createFeatureSelector<IBookState>(bookFeatureKey);

export const selectBookData = createSelector(selectBookState, (state: IBookState) => state);

export const selectIsBookLoading = createSelector(
  selectBookState,
  (state: IBookState) => state.loading,
);

export const selectBook = createSelector(selectBookState, (state: IBookState) => state.book);

export const selectBookLocation = createSelector(
  selectBookState,
  (state: IBookState) => state.city,
);

export const selectBookUser = createSelector(selectBookState, (state: IBookState) => state.user);
export const selectBookMessage = createSelector(
  selectBookState,
  (state: IBookState) => state.message,
);
export const selectBookType = createSelector(selectBookState, (state: IBookState) => state.type);

export const selectBookRecommendation = createSelector(
  selectBookState,
  (state: IBookState) => state.recommendation,
);
export const selectBookOther = createSelector(selectBookState, (state: IBookState) => state.other);

export const selectBookStatus = createSelector(
  selectBookState,
  (state: IBookState) => state.status,
);

export const selectBookId = createSelector(selectBookState, (state: IBookState) => state.id);
