import { Injectable } from '@angular/core';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import {
  CatalogApiActions,
  CatalogUiActions,
  selectCatalogPagination,
} from '@pages/catalog/store/index';
import { catchError, concatMap, first, map, of, skipWhile, switchMap } from 'rxjs';
import { CatalogService } from '@pages/catalog/services/catalog.service';
import { ICatalogResponse } from '@pages/catalog/interfaces/ICatalogResponse';
import { IPagination } from '@shared/interfaces/IPagination';
import { selectCurrentPosition, selectGeoRange } from '@store/geo';

@Injectable()
export class CatalogEffects {
  constructor(
    private actions$: Actions,
    private catalogService: CatalogService,
    private store: Store,
  ) {}

  catalogInit$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CatalogUiActions.catalogInit),
      concatLatestFrom(() => this.store.select(selectCatalogPagination)),
      concatMap(([_action, data]) => {
        if (data.currentPage < 2) {
          return [CatalogUiActions.fetchCatalog({ paginated: false })];
        }

        return [];
      }),
    );
  });

  fetchCatalog$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CatalogUiActions.fetchCatalog),
      concatLatestFrom(() => {
        return [this.store.select(selectGeoRange), this.store.select(selectCurrentPosition)];
      }),
      switchMap(([action, range, geo]) => {
        if (action.paginated) {
          return this.store.select(selectCatalogPagination).pipe(
            first(),
            skipWhile(({ currentPage, lastPage }) => {
              return currentPage >= lastPage;
            }),
            switchMap(({ currentPage }: IPagination) => {
              let nextPage = currentPage + 1;

              return this.catalogService
                .fetchCatalog(
                  nextPage,
                  range,
                  geo.position.coords.longitude,
                  geo.position.coords.latitude,
                )
                .pipe(
                  map((response: ICatalogResponse) => {
                    return CatalogApiActions.fetchCatalogSuccess({ response });
                  }),
                  catchError(() => {
                    return of(CatalogApiActions.fetchCatalogFail());
                  }),
                );
            }),
          );
        }

        return this.catalogService
          .fetchCatalog(
            undefined,
            range,
            geo.position.coords.longitude,
            geo.position.coords.latitude,
          )
          .pipe(
            map((response: ICatalogResponse) => {
              return CatalogApiActions.fetchCatalogSuccess({ response });
            }),
            catchError(() => {
              return of(CatalogApiActions.fetchCatalogFail());
            }),
          );
      }),
    );
  });
}
