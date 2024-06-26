import { createAction, props } from '@ngrx/store';
import { EBookActionTypes } from '@pages/book/store/EBookActionTypes';
import { IBookResponse } from '@pages/book/interfaces/IBookResponse';
import { IBookViewResponse } from '@pages/book/interfaces/IBookViewResponse';
import { IBookRequestResponse } from '@pages/book/interfaces/IBookRequestResponse';
import { IBookStatusResponse } from '@pages/book/interfaces/IBookStatusResponse';
import { IBookUpdateResponse } from '@pages/book/interfaces/IBookUpdateResponse';

export const fetchBookInfoSuccess = createAction(
  EBookActionTypes.FETCH_BOOK_INFO_SUCCESS,
  props<{ response: IBookResponse }>(),
);

export const fetchBookInfoFail = createAction(EBookActionTypes.FETCH_BOOK_INFO_FAIL);

export const viewBookSuccess = createAction(
  EBookActionTypes.VIEW_BOOK_SUCCESS,
  props<{ response: IBookViewResponse }>(),
);

export const viewBookFail = createAction(EBookActionTypes.VIEW_BOOK_FAIL);

export const requestBookSuccess = createAction(
  EBookActionTypes.REQUEST_BOOK_SUCCESS,
  props<{ response: IBookRequestResponse }>(),
);

export const requestBookFail = createAction(EBookActionTypes.REQUEST_BOOK_FAIL);

export const fetchBookStatusSuccess = createAction(
  EBookActionTypes.FETCH_BOOK_STATUS_SUCCESS,
  props<{ response: IBookStatusResponse }>(),
);

export const fetchBookStatusFail = createAction(EBookActionTypes.FETCH_BOOK_STATUS_FAIL);

export const updateBookDataSuccess = createAction(
  EBookActionTypes.UPDATE_BOOK_SUCCESS,
  props<{ response: IBookUpdateResponse }>(),
);

export const updateBookDataFail = createAction(EBookActionTypes.UPDATE_BOOK_FAIL);
