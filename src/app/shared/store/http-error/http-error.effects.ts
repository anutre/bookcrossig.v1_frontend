import { Actions, createEffect, ofType } from '@ngrx/effects';

import { tap } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { HttpErrorActions } from '@store/http-error/index';

@Injectable()
export class HttpErrorEffects {
  handleError$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(HttpErrorActions.handleHttpError),
        tap((action) => {
          if (isPlatformBrowser(this.platformId)) {
            this.toastr.error(action.error.message, `Ошибка`, {
              enableHtml: true,
            });
          }
        }),
      );
    },
    { dispatch: false },
  );

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private actions$: Actions,
    private toastr: ToastrService,
  ) {}
}
