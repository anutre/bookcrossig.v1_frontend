import { createFeatureSelector, createSelector } from '@ngrx/store';
import { appFeatureKey, IGlobalState } from './app.reducer';
import { getRouterSelectors, RouterReducerState } from '@ngrx/router-store';

const selectAppState = createFeatureSelector<IGlobalState>(appFeatureKey);

export const selectIsGlobalLoading = createSelector(
  selectAppState,
  (state: IGlobalState) => state.loading,
);

export const selectRouter = createFeatureSelector<RouterReducerState>('router');

export const {
  selectCurrentRoute, // select the current route
  selectFragment, // select the current route fragment
  selectQueryParams, // select the current route query params
  selectQueryParam, // factory function to select a query param
  selectRouteParams, // select the current route params
  selectRouteParam, // factory function to select a route param
  selectRouteData, // select the current route data
  selectUrl, // select the current url
} = getRouterSelectors(selectRouter);
