import { Action, createReducer, on } from '@ngrx/store';
import { Position } from '@capacitor/geolocation';
import { IGeoCity } from '@shared/interfaces/IGeoCity';
import { GeoApiActions, GeoUiActions } from '@store/geo/index';

export interface IGeoState {
  position: Position;
  positionRange: number;
  city: IGeoCity[] | null;
  loading: boolean;
}

export const initialState: IGeoState = {
  positionRange: -1,
  position: {
    coords: {
      latitude: -1,
      longitude: -1,
      accuracy: -1,
      altitudeAccuracy: null,
      altitude: -1,
      speed: null,
      heading: null,
    },
    timestamp: -1,
  },
  city: null,
  loading: false,
};

export const geoFeatureKey = 'GEO';

const _geoReducer = createReducer(
  initialState,
  on(GeoUiActions.getGeolocation, GeoUiActions.getCityByGeo, (state: IGeoState): IGeoState => {
    return {
      ...state,
      loading: false,
    };
  }),
  on(
    GeoApiActions.getGeolocationFail,
    GeoApiActions.getCityByGeolocationFail,
    (state: IGeoState): IGeoState => {
      return {
        ...state,
        loading: false,
      };
    },
  ),
  on(
    GeoApiActions.getCityByGeolocationSuccess,
    (state: IGeoState, action: { position: Position; city: IGeoCity[] }): IGeoState => {
      return {
        ...state,
        position: {
          coords: {
            latitude: action.position.coords.latitude,
            longitude: action.position.coords.longitude,
            accuracy: action.position.coords.accuracy,
            altitudeAccuracy: action.position.coords.altitudeAccuracy,
            altitude: action.position.coords.altitude,
            speed: action.position.coords.speed,
            heading: action.position.coords.heading,
          },
          timestamp: action.position.timestamp,
        },
        city: [...action.city],
        loading: false,
      };
    },
  ),
  on(
    GeoApiActions.getGeolocationSuccess,
    (state: IGeoState, action: { range: number; position: Position }): IGeoState => {
      return {
        ...state,
        position: {
          coords: {
            latitude: action.position.coords.latitude,
            longitude: action.position.coords.longitude,
            accuracy: action.position.coords.accuracy,
            altitudeAccuracy: action.position.coords.altitudeAccuracy,
            altitude: action.position.coords.altitude,
            speed: action.position.coords.speed,
            heading: action.position.coords.heading,
          },
          timestamp: action.position.timestamp,
        },
        positionRange: action.range,
        loading: false,
      };
    },
  ),
  on(
    GeoUiActions.setSessionPosition,
    (
      state: IGeoState,
      action: { range: string; longitude: string; latitude: string },
    ): IGeoState => {
      return {
        ...state,
        position: {
          coords: {
            ...state.position.coords,
            latitude: Number(action.latitude),
            longitude: Number(action.longitude),
          },
          timestamp: state.position.timestamp,
        },
        positionRange: Number(action.range),
        loading: false,
      };
    },
  ),
  on(GeoUiActions.clearRangePositionFilter, (state: IGeoState): IGeoState => {
    return {
      ...state,
      positionRange: -1,
    };
  }),
);

export function geoReducer(state: IGeoState, action: Action) {
  return _geoReducer(state, action);
}
