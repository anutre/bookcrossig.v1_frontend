import { createFeatureSelector, createSelector } from '@ngrx/store';
import { geoFeatureKey, IGeoState } from '@store/geo/geo.reducer';

const selectGeoState = createFeatureSelector<IGeoState>(geoFeatureKey);

export const selectCurrentPosition = createSelector(selectGeoState, (state: IGeoState) => {
  return {
    position: state.position,
  };
});

export const selectGeoRange = createSelector(selectGeoState, (state: IGeoState) => {
  return state.positionRange;
});

export const selectCityByGeo = createSelector(selectGeoState, (state: IGeoState) => {
  return state.city;
});
