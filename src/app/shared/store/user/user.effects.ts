import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { UserApiActions, UserUiActions } from '@store/user/index';
import { catchError, map, of, skipWhile, switchMap, tap } from 'rxjs';
import { IUserResponse } from '@shared/interfaces/IUserResponse';
import { UserService } from '@shared/services/user.service';
import { selectIsAuth } from '@store/auth';
import { Store } from '@ngrx/store';
import { MatDialog } from '@angular/material/dialog';
import { EmailConfirmModalComponent } from '@shared/modules/email-confirm-modal/components/email-confirm-modal/email-confirm-modal.component';

@Injectable()
export class UserEffects {
  constructor(
    private actions$: Actions,
    private userService: UserService,
    private dialog: MatDialog,
    private store: Store,
  ) {}

  fetchUser$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(UserUiActions.fetchUser),
      switchMap(() => {
        return this.store.select(selectIsAuth).pipe(
          skipWhile((isAuth: boolean) => !isAuth),
          switchMap(() => {
            return this.userService.fetchUser().pipe(
              map((response: IUserResponse) => {
                return UserApiActions.fetchUserSuccess({ response });
              }),
              catchError(() => {
                return of(UserApiActions.fetchUserFail());
              }),
            );
          }),
        );
      }),
    );
  });

  resendUserConfirmation = createEffect(() => {
    return this.actions$.pipe(
      ofType(UserUiActions.resendEmailConfirmation),
      switchMap(() => {
        return this.userService.resendConfirmationMail().pipe(
          map((response) => {
            return UserApiActions.resendEmailConfirmationSuccess({ response });
          }),
          catchError(() => {
            return of(UserApiActions.fetchUserFail());
          }),
        );
      }),
    );
  });

  checkIsUserEmailConfirmed$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(UserApiActions.fetchUserSuccess),
        tap((data: { response: IUserResponse }) => {
          const isEmailVerified = data.response.data.attributes.verification.verified;

          if (!isEmailVerified) {
            this.proceedUserEmailConfirmation();
          }
        }),
      );
    },
    { dispatch: false },
  );

  private proceedUserEmailConfirmation() {
    this.dialog.open(EmailConfirmModalComponent, {
      panelClass: 'cdk-overlay-pane--swiper-modal',
    });
  }
}
