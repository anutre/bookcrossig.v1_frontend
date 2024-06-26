import { createFeatureSelector, createSelector } from '@ngrx/store';
import { catalogFeatureKey, ICatalogState } from '@pages/catalog/store/catalog.reducer';

const selectCatalogState = createFeatureSelector<ICatalogState>(catalogFeatureKey);

export const selectIsCatalogLoading = createSelector(
  selectCatalogState,
  (state: ICatalogState) => state.loading,
);

export const selectBooks = createSelector(
  selectCatalogState,
  (state: ICatalogState) => state.books,
);

export const selectCatalogPagination = createSelector(
  selectCatalogState,
  (state: ICatalogState) => state.pagination,
);
