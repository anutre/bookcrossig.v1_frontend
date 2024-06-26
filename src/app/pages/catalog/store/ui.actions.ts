import { createAction, props } from '@ngrx/store';
import { ECatalogActionTypes } from '@pages/catalog/store/ECatalogActionTypes';

export const catalogInit = createAction(ECatalogActionTypes.CATALOG_INIT);

export const fetchCatalog = createAction(
  ECatalogActionTypes.FETCH_CATALOG,
  props<{ paginated: boolean }>(),
);
