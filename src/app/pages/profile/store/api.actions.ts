import { createAction, props } from '@ngrx/store';
import { IPersonalDetailsResponse } from '@pages/profile/interfaces/IPersonalDetailsResponse';
import { EProfileActionTypes } from '@pages/profile/store/EProfileActionTypes';
import { IPayloadUpdatePersonalDetails } from '@pages/profile/interfaces/IPayloadUpdatePesonalDetails';
import { IProfileBooksResponse } from '@pages/profile/interfaces/IProfileBooksResponse';
import { IProfileAddedBookResponse } from '@pages/profile/interfaces/IProfileAddedBookResponse';

export const fetchPersonalDetailsSuccess = createAction(
  EProfileActionTypes.FETCH_PERSONAL_DETAILS_SUCCESS,
  props<{ response: IPersonalDetailsResponse }>(),
);

export const fetchPersonalDetailsFail = createAction(
  EProfileActionTypes.FETCH_PERSONAL_DETAILS_FAIL,
);

export const fetchProfileAddedBooksSuccess = createAction(
  EProfileActionTypes.FETCH_PROFILE_ADDED_BOOKS_SUCCESS,
  props<{ response: IProfileAddedBookResponse }>(),
);

export const fetchProfileAddedBooksFail = createAction(
  EProfileActionTypes.FETCH_PROFILE_ADDED_BOOKS_FAIL,
);

export const fetchProfileViewedBooksSuccess = createAction(
  EProfileActionTypes.FETCH_PROFILE_VIEWED_BOOKS_SUCCESS,
  props<{ response: IProfileBooksResponse }>(),
);

export const fetchProfileViewedBooksFail = createAction(
  EProfileActionTypes.FETCH_PROFILE_VIEWED_BOOKS_FAIL,
);

export const updatePersonalDetailsSuccess = createAction(
  EProfileActionTypes.UPDATE_PERSONAL_DETAILS_SUCCESS,
  props<{ response: IPayloadUpdatePersonalDetails }>(),
);

export const updatePersonalDetailsFail = createAction(
  EProfileActionTypes.UPDATE_PERSONAL_DETAILS_FAIL,
);
