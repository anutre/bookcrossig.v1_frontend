import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { distinctUntilChanged, of, switchMap, tap } from 'rxjs';
import { UIActions } from '@store/ui/index';

@Injectable()
export class UiEffects {
  constructor(private actions$: Actions) {}

  themeInit = createEffect(() => {
    return this.actions$.pipe(
      ofType(UIActions.initTheme),
      switchMap(() => {
        const themeMode = localStorage.getItem('themeMode') ?? 'light';
        return of(UIActions.toggleThemeMode({ themeMode }));
      }),
    );
  });

  toggleThemeMode = createEffect(() => {
    return this.actions$.pipe(
      ofType(UIActions.toggleThemeMode),
      distinctUntilChanged(),
      tap(({ themeMode }) => localStorage.setItem('themeMode', themeMode)),
    );
  });
}
