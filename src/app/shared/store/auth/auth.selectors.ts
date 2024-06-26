import { createFeatureSelector, createSelector } from '@ngrx/store';
import { authFeatureKey, IAuthState } from './auth.reducer';

const selectAuthState = createFeatureSelector<IAuthState>(authFeatureKey);

export const selectIsAuthLoading = createSelector(
  selectAuthState,
  (state: IAuthState) => state.loading,
);

export const selectIsAuth = createSelector(selectAuthState, (state: IAuthState) => state.isAuth);

export const selectAuthTokens = createSelector(selectAuthState, (state: IAuthState) => {
  return { accessToken: state.accessToken, refreshToken: state.refreshToken };
});

export const selectAccessToken = createSelector(
  selectAuthState,
  (state: IAuthState) => state.accessToken,
);

export const selectRefreshToken = createSelector(
  selectAuthState,
  (state: IAuthState) => state.refreshToken,
);
