import { createAction, props } from '@ngrx/store';
import { EMetaActionTypes } from '@store/meta/EMetaActionTypes';
import { IMetaCounter } from '@shared/interfaces/IMetaCounter';

export const fetchMetaCounterSuccess = createAction(
  EMetaActionTypes.FETCH_META_COUNTER_SUCCESS,
  props<{ response: IMetaCounter }>(),
);

export const fetchMetaCounterFail = createAction(EMetaActionTypes.FETCH_META_COUNTER_FAIL);
