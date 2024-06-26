import { IBook } from '@shared/interfaces/IBook';
import { Action, createReducer, on } from '@ngrx/store';
import { CatalogApiActions, CatalogUiActions } from '@pages/catalog/store/index';
import { ICatalogResponse } from '@pages/catalog/interfaces/ICatalogResponse';
import { IPagination } from '@shared/interfaces/IPagination';

export interface ICatalogState {
  books: IBook[];
  pagination: IPagination;
  loading: boolean;
}
export const initialState: ICatalogState = {
  books: [],
  pagination: {
    currentPage: 1,
    lastPage: 1,
    perPage: 3,
  },
  loading: false,
};

export const catalogFeatureKey = 'CATALOG';

const _catalogReducer = createReducer(
  initialState,
  on(CatalogUiActions.fetchCatalog, (state: ICatalogState): ICatalogState => {
    return {
      ...state,
      loading: true,
    };
  }),
  on(
    CatalogApiActions.fetchCatalogSuccess,
    (state: ICatalogState, action: { response: ICatalogResponse }): ICatalogState => {
      let updatedBooks: IBook[] = [...action.response.data.attributes.books];

      if (action.response.data.attributes.pagination.currentPage > 1) {
        updatedBooks = [...state.books, ...action.response.data.attributes.books];
      }

      return {
        ...state,
        books: updatedBooks,
        pagination: action.response.data.attributes.pagination,
        loading: false,
      };
    },
  ),
  on(CatalogApiActions.fetchCatalogFail, (state: ICatalogState): ICatalogState => {
    return {
      ...state,
      loading: false,
    };
  }),
);

export function catalogReducer(state: ICatalogState, action: Action) {
  return _catalogReducer(state, action);
}
