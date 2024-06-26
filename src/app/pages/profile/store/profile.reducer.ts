import { Action, createReducer, on } from '@ngrx/store';
import { IPersonalDetailsResponse } from '@pages/profile/interfaces/IPersonalDetailsResponse';
import { ProfileApiActions, ProfileUiActions } from '@pages/profile/store/index';
import { IPersonalDetailsData } from '@pages/profile/interfaces/IPersonalDetailsData';
import { IPayloadUpdatePersonalDetails } from '@pages/profile/interfaces/IPayloadUpdatePesonalDetails';
import { IBook } from '@shared/interfaces/IBook';
import { IProfileBooksResponse } from '@pages/profile/interfaces/IProfileBooksResponse';
import { IBookAdded } from '@pages/profile/interfaces/IBookAdded';
import { IProfileAddedBookResponse } from '@pages/profile/interfaces/IProfileAddedBookResponse';

export interface IProfileState {
  personalDetails: Partial<IPersonalDetailsData> | null;
  loading: boolean;
  books: {
    added: IBookAdded[];
    viewed: IBook[];
  };
}

export const initialState: IProfileState = {
  personalDetails: null,
  loading: false,
  books: {
    added: [],
    viewed: [],
  },
};

export const profileFeatureKey = 'PROFILE';

const _profileReducer = createReducer(
  initialState,
  on(
    ProfileUiActions.fetchProfileAddedBooks,
    ProfileUiActions.fetchProfileViewedBooks,
    ProfileUiActions.fetchPersonalDetails,
    ProfileUiActions.updatePersonalDetails,
    (state: IProfileState): IProfileState => {
      return {
        ...state,
        loading: true,
      };
    },
  ),
  on(
    ProfileApiActions.fetchProfileAddedBooksSuccess,
    (state: IProfileState, action: { response: IProfileAddedBookResponse }): IProfileState => {
      return {
        ...state,
        books: { ...state.books, added: action.response.data.attributes.books },
        loading: false,
      };
    },
  ),
  on(
    ProfileApiActions.fetchProfileViewedBooksSuccess,
    (state: IProfileState, action: { response: IProfileBooksResponse }): IProfileState => {
      return {
        ...state,
        books: { ...state.books, viewed: action.response.data.attributes.books },
        loading: false,
      };
    },
  ),
  on(
    ProfileApiActions.fetchPersonalDetailsSuccess,
    (state: IProfileState, action: { response: IPersonalDetailsResponse }): IProfileState => {
      return {
        ...state,
        personalDetails: action.response.data.attributes.user,
        loading: false,
      };
    },
  ),
  on(
    ProfileApiActions.updatePersonalDetailsSuccess,
    (state: IProfileState, action: { response: IPayloadUpdatePersonalDetails }): IProfileState => {
      const updateDetails = action.response.data?.attributes;
      return {
        ...state,
        personalDetails: { ...state.personalDetails, ...updateDetails },
        loading: false,
      };
    },
  ),
  on(
    ProfileApiActions.fetchPersonalDetailsFail,
    ProfileApiActions.updatePersonalDetailsFail,
    ProfileApiActions.fetchProfileAddedBooksFail,
    ProfileApiActions.fetchProfileViewedBooksFail,
    (state: IProfileState): IProfileState => {
      return {
        ...state,
        loading: false,
      };
    },
  ),
);

export function profileReducer(state: IProfileState, action: Action) {
  return _profileReducer(state, action);
}
