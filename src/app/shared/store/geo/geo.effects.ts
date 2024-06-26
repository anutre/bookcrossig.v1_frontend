import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { GeoService } from '@shared/services/geo.service';
import { catchError, map, of, switchMap } from 'rxjs';
import { Position } from '@capacitor/geolocation';
import { CatalogUiActions } from '@pages/catalog/store';
import { GeoApiActions, GeoUiActions } from '@store/geo/index';
import { IGeoCity } from '@shared/interfaces/IGeoCity';

@Injectable()
export class GeoEffects {
  constructor(private actions$: Actions, private geoService: GeoService, private store: Store) {}

  geoInitCheckSessionPosition = createEffect(() => {
    return this.actions$.pipe(
      ofType(GeoUiActions.geoInit),
      switchMap(() => {
        const sessionRange = sessionStorage.getItem('range') ?? '-1';
        const sessionLongitude = sessionStorage.getItem('longitude') ?? '-1';
        const sessionLatitude = sessionStorage.getItem('latitude') ?? '-1';

        return of(
          GeoUiActions.setSessionPosition({
            range: sessionRange,
            longitude: sessionLongitude,
            latitude: sessionLatitude,
          }),
        );
      }),
    );
  });

  getCurrentPosition$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(GeoUiActions.getGeolocation),
      switchMap((action: { range: number }) => {
        return this.geoService.getCurrentPosition().pipe(
          map((position: Position) => {
            return GeoApiActions.getGeolocationSuccess({ position, range: action.range });
          }),
          catchError(() => {
            return of(GeoApiActions.getGeolocationFail());
          }),
        );
      }),
    );
  });

  updateGeoDataWithPosition$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(GeoApiActions.getGeolocationSuccess),
      switchMap((data) => {
        sessionStorage.setItem('range', data.range.toString());
        sessionStorage.setItem('longitude', data.position.coords.longitude.toString());
        sessionStorage.setItem('latitude', data.position.coords.latitude.toString());
        return of(CatalogUiActions.fetchCatalog({ paginated: false }));
      }),
    );
  });

  getCityByGeoPosition$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(GeoUiActions.getCityByGeo),
      switchMap(() => {
        return this.geoService.getCurrentPosition().pipe(
          switchMap((position: Position) => {
            return this.geoService
              .getCityCloseToUser(position.coords.longitude, position.coords.latitude)
              .pipe(
                map((city: IGeoCity[]) => {
                  return GeoApiActions.getCityByGeolocationSuccess({ position, city });
                }),
                catchError(() => {
                  return of(GeoApiActions.getCityByGeolocationFail());
                }),
              );
          }),
          catchError(() => {
            return of(GeoApiActions.getGeolocationFail());
          }),
        );
      }),
    );
  });

  clearSessionStoragePosition = createEffect(() => {
    return this.actions$.pipe(
      ofType(GeoUiActions.clearRangePositionFilter),
      switchMap(() => {
        sessionStorage.removeItem('range');
        return of(CatalogUiActions.fetchCatalog({ paginated: false }));
      }),
    );
  });
}
