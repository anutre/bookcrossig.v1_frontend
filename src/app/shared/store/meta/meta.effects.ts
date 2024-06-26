import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { MetaService } from '@shared/services/meta.service';
import { MetaApiActions, MetaUiActions } from '@store/meta/index';
import { catchError, debounceTime, map, of, skipWhile, switchMap } from 'rxjs';
import { selectIsAuth } from '@store/auth';
import { IMetaCounter } from '@shared/interfaces/IMetaCounter';

@Injectable()
export class MetaEffects {
  constructor(private actions$: Actions, private metaService: MetaService, private store: Store) {}

  fetchMetaCounter$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(MetaUiActions.fetchMetaCounter),
      debounceTime(1000),
      switchMap(() => {
        return this.store.select(selectIsAuth).pipe(
          skipWhile((isAuth: boolean) => !isAuth),
          switchMap(() => {
            return this.metaService.fetchMetaCounter().pipe(
              map((response: IMetaCounter) => {
                return MetaApiActions.fetchMetaCounterSuccess({ response });
              }),
              catchError(() => {
                return of(MetaApiActions.fetchMetaCounterFail());
              }),
            );
          }),
        );
      }),
    );
  });
}
