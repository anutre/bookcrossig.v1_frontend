import { Action, createReducer, on } from '@ngrx/store';
import { ILocalBookUser } from '@pages/book/interfaces/ILocalBookUser';
import { BookApiActions, BookUiActions } from '@pages/book/store/index';
import { ILocalBook } from '@pages/book/interfaces/ILocalBook';
import { IBookResponse } from '@pages/book/interfaces/IBookResponse';
import { IBookOther } from '@pages/book/interfaces/IBookOther';
import { IBookRecommendation } from '@pages/book/interfaces/IBookRecommendation';
import { IBookRequestResponse } from '@pages/book/interfaces/IBookRequestResponse';
import { IBookStatusResponse } from '@pages/book/interfaces/IBookStatusResponse';

export interface IBookState {
  loading: boolean;
  book: ILocalBook | null;
  user: ILocalBookUser | null;
  other: IBookOther[];
  recommendation: IBookRecommendation[];
  message: string | null;
  status: boolean;
  type: number;
  city: string | null;
  id: string | null;
}

export const initialState: IBookState = {
  loading: false,
  book: null,
  user: null,
  other: [],
  recommendation: [],
  message: null,
  type: 0,
  status: false,
  city: null,
  id: null,
};

export const bookFeatureKey = 'BOOK';

const _bookReducer = createReducer(
  initialState,
  on(
    BookUiActions.fetchBookInfo,
    BookUiActions.viewBook,
    BookUiActions.updateBook,
    (state: IBookState): IBookState => {
      return {
        ...state,
        loading: true,
      };
    },
  ),
  on(
    BookApiActions.fetchBookInfoSuccess,
    (state: IBookState, action: { response: IBookResponse }): IBookState => {
      return {
        ...state,
        book: action.response.data.attributes.book,
        other: action.response.data.attributes.other,
        recommendation: action.response.data.attributes.recommendation,
        user: action.response.data.attributes.user,
        message: action.response.data.attributes.message,
        type: action.response.data.attributes.type,
        city: action.response.data.attributes.city,
        id: action.response.data.id,
        loading: false,
      };
    },
  ),
  on(
    BookApiActions.requestBookSuccess,
    (state: IBookState, action: { response: IBookRequestResponse }): IBookState => {
      return {
        ...state,
        status: action.response.data.attributes.status,
        loading: false,
      };
    },
  ),
  on(
    BookApiActions.fetchBookStatusSuccess,
    (state: IBookState, action: { response: IBookStatusResponse }): IBookState => {
      return {
        ...state,
        status: action.response.data.attributes.status,
        loading: false,
      };
    },
  ),
  on(
    BookApiActions.fetchBookInfoFail,
    BookApiActions.requestBookFail,
    BookApiActions.viewBookSuccess,
    BookApiActions.viewBookFail,
    BookApiActions.updateBookDataFail,
    (state: IBookState): IBookState => {
      return {
        ...state,
        loading: false,
      };
    },
  ),
);

export function bookReducer(state: IBookState, action: Action) {
  return _bookReducer(state, action);
}
