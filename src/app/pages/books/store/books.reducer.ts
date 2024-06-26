import { Action, createReducer, on } from '@ngrx/store';
import { BooksApiActions, BooksUiActions } from '@pages/books/store/index';
import { ISearchBooksResponse } from '@pages/books/interfaces/ISearchBooksResponse';
import { ISearchBook } from '@pages/books/interfaces/ISearchBook';
import { ISearchBooksByIsbnResponse } from '@pages/books/interfaces/ISearchBooksByIsbnResponse';
import { ISearchBookInfo } from '@pages/books/interfaces/ISearchBookInfo';

export interface IBooksState {
  query: string;
  books: ISearchBook[];
  bookInfo: ISearchBookInfo | null;
  loading: boolean;
}

export const initialState: IBooksState = {
  query: '',
  books: [],
  loading: false,
  bookInfo: null,
};

export const booksFeatureKey = 'BOOKS';

const _booksReducer = createReducer(
  initialState,
  on(
    BooksUiActions.searchBooks,
    BooksUiActions.fetchBookInfo,
    BooksUiActions.createBook,
    (state: IBooksState): IBooksState => {
      return {
        ...state,
        loading: true,
      };
    },
  ),
  on(
    BooksApiActions.searchBooksSuccess,
    (state: IBooksState, action: { response: ISearchBooksResponse }): IBooksState => {
      return {
        ...state,
        books: action.response.data.attributes.books,
        loading: false,
      };
    },
  ),
  on(
    BooksUiActions.updateSuggestQuery,
    (state: IBooksState, action: { query: string }): IBooksState => {
      return {
        ...state,
        query: action.query,
      };
    },
  ),
  on(
    BooksApiActions.searchBooksFail,
    BooksApiActions.creteBookFail,
    BooksApiActions.fetchBookFail,
    BooksApiActions.goToCreatedBookFail,
    BooksApiActions.goToCreatedBookSuccess,
    BooksApiActions.creteBookSuccess,
    (state: IBooksState): IBooksState => {
      return {
        ...state,
        loading: false,
      };
    },
  ),
  on(BooksUiActions.resetSuggestion, (state: IBooksState): IBooksState => {
    return {
      ...state,
      query: '',
      books: [],
      loading: false,
    };
  }),
  on(
    BooksApiActions.fetchBookSuccess,
    (state: IBooksState, action: { response: ISearchBooksByIsbnResponse }): IBooksState => {
      return {
        ...state,
        loading: false,
        bookInfo: action.response.data.attributes.book,
      };
    },
  ),
);

export function booksReducer(state: IBooksState, action: Action) {
  return _booksReducer(state, action);
}
