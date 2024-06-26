import { createAction, props } from '@ngrx/store';
import { EBookActionTypes } from '@pages/book/store/EBookActionTypes';

export const bookInit = createAction(EBookActionTypes.INIT);

export const fetchBookInfo = createAction(EBookActionTypes.FETCH_BOOK_INFO);

export const fetchBookStatus = createAction(EBookActionTypes.FETCH_BOOK_STATUS);

export const viewBook = createAction(EBookActionTypes.VIEW_BOOK);

export const requestBook = createAction(EBookActionTypes.REQUEST_BOOK);

export const updateBook = createAction(
  EBookActionTypes.UPDATE_BOOK,
  props<{ payload: FormData }>(),
);
