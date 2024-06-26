import { createFeatureSelector, createSelector } from '@ngrx/store';
import { booksFeatureKey, IBooksState } from '@pages/books/store/books.reducer';

const selectBooksState = createFeatureSelector<IBooksState>(booksFeatureKey);

export const selectIsBooksLoading = createSelector(
  selectBooksState,
  (state: IBooksState) => state.loading,
);

export const selectSearchBooks = createSelector(
  selectBooksState,
  (state: IBooksState) => state.books,
);

export const selectSearchBooksQuery = createSelector(
  selectBooksState,
  (state: IBooksState) => state.query,
);

export const selectBookInfo = createSelector(
  selectBooksState,
  (state: IBooksState) => state.bookInfo,
);
