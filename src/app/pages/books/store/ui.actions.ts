import { createAction, props } from '@ngrx/store';
import { EBooksActionTypes } from '@pages/books/store/EBooksActionTypes';

export const booksInit = createAction(EBooksActionTypes.INIT, props<{ query: string }>());

export const searchBooks = createAction(EBooksActionTypes.SEARCH_BOOKS, props<{ query: string }>());

export const updateSuggestQuery = createAction(
  EBooksActionTypes.UPDATE_QUERY,
  props<{ query: string }>(),
);

export const resetSuggestion = createAction(EBooksActionTypes.RESET);

export const createBook = createAction(
  EBooksActionTypes.CREATE_BOOK,
  props<{ payload: FormData }>(),
);

export const fetchBookInfo = createAction(EBooksActionTypes.FETCH_BOOK);
