import { createAction, props } from '@ngrx/store';
import { EBooksActionTypes } from '@pages/books/store/EBooksActionTypes';
import { ISearchBooksResponse } from '@pages/books/interfaces/ISearchBooksResponse';
import { ISearchBooksByIsbnResponse } from '@pages/books/interfaces/ISearchBooksByIsbnResponse';
import { IBooksAddResponse } from '@pages/books/interfaces/IBooksAddResponse';

export const searchBooksSuccess = createAction(
  EBooksActionTypes.SEARCH_BOOKS_SUCCESS,
  props<{ response: ISearchBooksResponse }>(),
);

export const searchBooksFail = createAction(EBooksActionTypes.SEARCH_BOOKS_FAIL);

export const creteBookSuccess = createAction(
  EBooksActionTypes.CREATE_BOOK_SUCCESS,
  props<{ response: IBooksAddResponse }>(),
);

export const creteBookFail = createAction(EBooksActionTypes.CREATE_BOOK_FAIL);

export const fetchBookSuccess = createAction(
  EBooksActionTypes.FETCH_BOOK_SUCCESS,
  props<{ response: ISearchBooksByIsbnResponse }>(),
);

export const fetchBookFail = createAction(EBooksActionTypes.FETCH_BOOK_FAIL);

export const goToCreatedBookFail = createAction(EBooksActionTypes.GO_TO_BOOK_FAIL);

export const goToCreatedBookSuccess = createAction(EBooksActionTypes.GO_TO_BOOK_SUCCESS);
