import { createAction, props } from '@ngrx/store';
import { EGeoActionTypes } from '@store/geo/EGeoActionTypes';
import { Position } from '@capacitor/geolocation';
import { IGeoCity } from '@shared/interfaces/IGeoCity';

export const getGeolocationSuccess = createAction(
  EGeoActionTypes.GET_GEOLOCATION_SUCCESS,
  props<{
    range: number;
    position: Position;
  }>(),
);

export const getGeolocationFail = createAction(EGeoActionTypes.GET_GEOLOCATION_SUCCESS);

export const getCityByGeolocationSuccess = createAction(
  EGeoActionTypes.GET_CITY_BY_GEOLOCATION_SUCCESS,
  props<{ city: IGeoCity[]; position: Position }>(),
);

export const getCityByGeolocationFail = createAction(EGeoActionTypes.GET_CITY_BY_GEOLOCATION_FAIL);
