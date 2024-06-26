import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { catchError, first, mergeMap, NEVER, Observable, switchMap, throwError } from 'rxjs';
import { Store } from '@ngrx/store';
import { AuthUIActions, selectAuthTokens, selectIsAuth } from '@store/auth';
import { isPlatformBrowser } from '@angular/common';
import { AuthService } from '@shared/services/auth.service';
import { IAuthTokens } from '@shared/interfaces/IAuthTokens';
import { IRefreshResponse } from '@shared/interfaces/IRefreshResponse';
import { ApiPathConfig } from '@shared/config/api.config';

const EXCLUDE_ROUTES = [ApiPathConfig.login, ApiPathConfig.register, ApiPathConfig.index];

@Injectable()
export class HttpAuthInterceptor implements HttpInterceptor {
  private isRefreshing = false;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private authService: AuthService,
    private store: Store,
  ) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let isAllowedWithoutHeaders = EXCLUDE_ROUTES.some((path: ApiPathConfig) =>
      request.url.includes(path),
    );

    if (isPlatformBrowser(this.platformId) && !localStorage.getItem('accessToken')) {
      isAllowedWithoutHeaders = true;
    }

    if (!isPlatformBrowser(this.platformId) || isAllowedWithoutHeaders) {
      return next.handle(request);
    }

    return this.store.select(selectAuthTokens).pipe(
      first(),
      switchMap(({ accessToken, refreshToken }) => {
        const authReq = !!accessToken
          ? request.clone({
              setHeaders: { Authorization: 'JWT ' + accessToken },
            })
          : request;

        if (!accessToken || isAllowedWithoutHeaders) {
          return NEVER;
        }

        return next.handle(authReq).pipe(
          catchError((err: HttpErrorResponse) => {
            const isUnauthorizedStatus = err.status === 401;

            if (!isAllowedWithoutHeaders && isUnauthorizedStatus) {
              return this.handleRefreshToken(request, next, {
                access: accessToken,
                refresh: refreshToken,
              });
            }

            return throwError(() => err);
          }),
        );
      }),
    );
  }

  private handleRefreshToken(req: HttpRequest<any>, next: HttpHandler, tokens: IAuthTokens) {
    return this.store.select(selectIsAuth).pipe(
      first(),
      switchMap((isAuth: boolean) => {
        if (!this.isRefreshing) {
          this.isRefreshing = true;
          if (isAuth) {
            return this.authService.refreshTokens(tokens).pipe(
              mergeMap((response: IRefreshResponse) => {
                this.isRefreshing = false;

                const updatedAccess: string | null = response.data.attributes.tokens.access;
                const updatedRefresh: string | null = response.data.attributes.tokens.refresh;

                const updatedTokens: IAuthTokens = {
                  access: updatedAccess,
                  refresh: updatedRefresh,
                };

                this.authService.setAuthTokens(updatedTokens);

                this.store.dispatch(
                  AuthUIActions.setTokens({
                    tokens: updatedTokens,
                  }),
                );

                const updatedRequest = req.clone({
                  setHeaders: { Authorization: 'JWT ' + updatedAccess },
                });

                return next.handle(updatedRequest);
              }),
              catchError((err: HttpErrorResponse) => {
                this.isRefreshing = false;

                const isForbidden: boolean = err.status === 403 || err.status === 500;

                if (isForbidden) {
                  this.store.dispatch(AuthUIActions.logout());
                }

                return throwError(() => err);
              }),
            );
          }
        }

        return next.handle(req);
      }),
    );
  }
}
