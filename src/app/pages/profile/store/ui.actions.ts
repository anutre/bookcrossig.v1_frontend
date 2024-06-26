import { createAction, props } from '@ngrx/store';
import { EProfileActionTypes } from '@pages/profile/store/EProfileActionTypes';
import { IPayloadUpdatePersonalDetails } from '@pages/profile/interfaces/IPayloadUpdatePesonalDetails';

export const fetchPersonalDetails = createAction(EProfileActionTypes.FETCH_PERSONAL_DETAILS);

export const fetchProfileAddedBooks = createAction(EProfileActionTypes.FETCH_PROFILE_ADDED_BOOKS);

export const fetchProfileViewedBooks = createAction(EProfileActionTypes.FETCH_PROFILE_VIEWED_BOOKS);

export const updatePersonalDetails = createAction(
  EProfileActionTypes.UPDATE_PERSONAL_DETAILS,
  props<{ payload: IPayloadUpdatePersonalDetails }>(),
);
