import { createAction, props } from '@ngrx/store';
import { ECatalogActionTypes } from '@pages/catalog/store/ECatalogActionTypes';
import { ICatalogResponse } from '@pages/catalog/interfaces/ICatalogResponse';

export const fetchCatalogSuccess = createAction(
  ECatalogActionTypes.FETCH_CATALOG_SUCCESS,
  props<{ response: ICatalogResponse }>(),
);
export const fetchCatalogFail = createAction(ECatalogActionTypes.FETCH_CATALOG_FAIL);
