import { createAction, props } from '@ngrx/store';
import { EGeoActionTypes } from '@store/geo/EGeoActionTypes';

export const geoInit = createAction(EGeoActionTypes.INIT);

export const getGeolocation = createAction(
  EGeoActionTypes.GET_GEOLOCATION,
  props<{ range: number }>(),
);

export const getCityByGeo = createAction(EGeoActionTypes.GET_CITY_BY_GEOLOCATION);

export const setSessionPosition = createAction(
  EGeoActionTypes.SET_CURRENT_POSITION,
  props<{
    range: string;
    longitude: string;
    latitude: string;
  }>(),
);

export const clearRangePositionFilter = createAction(EGeoActionTypes.CLEAR_RANGE_POSITION_FILTER);
