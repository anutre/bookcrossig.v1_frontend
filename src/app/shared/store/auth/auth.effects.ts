import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { AuthService } from '@shared/services/auth.service';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { AuthApiActions, AuthUIActions, selectAuthTokens } from '@store/auth/index';
import { catchError, map, of, switchMap } from 'rxjs';
import { ILoginResponse } from '@pages/auth/interfaces/ILoginResponse';
import { IRegisterResponse } from '@pages/auth/interfaces/IRegisterResponse';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { isPlatformBrowser } from '@angular/common';
import { UserUiActions } from '@store/user';
import { ToastrService } from 'ngx-toastr';
import { HttpErrorService } from '@shared/services/http-error.service';
import { ITelegramAuthResponse } from '@shared/modules/oauth/interfaces/ITelegramAuthResponse';
import { MatDialog } from '@angular/material/dialog';

@Injectable()
export class AuthEffects {
  login$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthUIActions.login),
      switchMap((action) => {
        return this.authService.login(action.loginData).pipe(
          map((response: ILoginResponse) => {
            this.authService.setAuthTokens({
              access: response.data.attributes.tokens.access,
              refresh: response.data.attributes.tokens.refresh,
            });
            return AuthApiActions.loginSuccess({ response });
          }),
          catchError(() => {
            return of(AuthApiActions.loginFail());
          }),
        );
      }),
    );
  });

  loginWithTelegram$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthUIActions.loginWithTelegram),
      switchMap((action: { loginData: ITelegramAuthResponse }) => {
        return this.authService.loginWithTelegram(action.loginData).pipe(
          map((response: ILoginResponse) => {
            this.authService.setAuthTokens({
              access: response.data.attributes.tokens.access,
              refresh: response.data.attributes.tokens.refresh,
            });
            return AuthApiActions.loginWithTelegramSuccess({ response });
          }),
          catchError(() => {
            return of(AuthApiActions.loginWithTelegramFail());
          }),
        );
      }),
    );
  });

  loginWithApple$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthUIActions.loginWithApple),
      switchMap((action: { loginData: { id: string; code: string } }) => {
        return this.authService.loginWithApple(action.loginData).pipe(
          map((response: any) => {
            this.authService.setAuthTokens({
              access: response.data.attributes.tokens.access,
              refresh: response.data.attributes.tokens.refresh,
            });
            return AuthApiActions.loginWithAppleSuccess({ response });
          }),
          catchError(() => {
            return of(AuthApiActions.loginWithAppleFail());
          }),
        );
      }),
    );
  });

  loginFail$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(AuthApiActions.loginFail),
        switchMap(() => {
          return of(
            this.toastr.error('Вы ввели неверный адрес электронной почты или пароль', `Ошибка!`),
          );
        }),
      );
    },
    { dispatch: false },
  );

  register$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthUIActions.register),
      switchMap((action) => {
        return this.authService.register(action.registerData).pipe(
          map((response: IRegisterResponse) => {
            this.authService.setAuthTokens(response.data.attributes.tokens);
            return AuthApiActions.registerSuccess({ response });
          }),
          catchError((errRes) => {
            return of(AuthApiActions.registerFail(), this.httpErrorService.handleError(errRes));
          }),
        );
      }),
    );
  });

  authSuccess$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(
          AuthApiActions.registerSuccess,
          AuthApiActions.loginSuccess,
          AuthApiActions.loginWithTelegramSuccess,
          AuthApiActions.loginWithAppleSuccess,
        ),
        switchMap(() => {
          return this.router.navigate(['/']);
        }),
      );
    },
    { dispatch: false },
  );

  logout$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthUIActions.logout),
      concatLatestFrom(() => this.store.select(selectAuthTokens)),
      switchMap(([_action, tokens]) => {
        return this.authService
          .logout({
            access: tokens.accessToken,
            refresh: tokens.refreshToken,
          })
          .pipe(
            map(() => {
              return AuthApiActions.logoutSuccess();
            }),
            catchError(() => {
              return of(AuthApiActions.logoutFail());
            }),
          );
      }),
    );
  });

  deleteAccount$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthUIActions.deleteAccount),
      switchMap(() =>
        this.authService.deleteAccount().pipe(
          map(() => AuthApiActions.deleteAccSuccess()),
          catchError(() => of(AuthApiActions.deleteAccFail())),
        ),
      ),
    );
  });

  logoutFinished$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(
        AuthApiActions.logoutSuccess,
        AuthApiActions.logoutFail,
        AuthApiActions.deleteAccSuccess,
        AuthApiActions.deleteAccFail,
      ),
      switchMap(() => {
        if (isPlatformBrowser(this.platformId)) {
          localStorage.removeItem('accessToken');
          localStorage.removeItem('refreshToken');
        }
        this.dialog.closeAll();
        this.router.navigate(['/auth/login']);

        return of(UserUiActions.deleteUser());
      }),
    );
  });

  authInitSetTokens$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthUIActions.authInit),
      map(() => {
        const accessToken = localStorage.getItem('accessToken');
        const refreshToken = localStorage.getItem('refreshToken');
        return AuthUIActions.setTokens({
          tokens: { access: accessToken, refresh: refreshToken },
        });
      }),
    );
  });

  authInitFetchUser$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthUIActions.authInit),
      map(() => {
        return UserUiActions.fetchUser();
      }),
    );
  });

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private actions$: Actions,
    private authService: AuthService,
    private router: Router,
    private store: Store,
    private toastr: ToastrService,
    private httpErrorService: HttpErrorService,
    private dialog: MatDialog,
  ) {}
}
