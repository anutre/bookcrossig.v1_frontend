import { createAction } from '@ngrx/store';
import { EMetaActionTypes } from '@store/meta/EMetaActionTypes';

export const fetchMetaCounter = createAction(EMetaActionTypes.FETCH_META_COUNTER);

export const unmarkMetaMessages = createAction(EMetaActionTypes.UNMARK_META_MESSAGES);
