import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { catchError, map, of, skipWhile, switchMap } from 'rxjs';
import { selectIsAuth } from '@store/auth';
import { Store } from '@ngrx/store';
import { ProfileService } from '@pages/profile/services/profile.service';
import { ProfileApiActions, ProfileUiActions } from '@pages/profile/store/index';
import { IPersonalDetailsResponse } from '@pages/profile/interfaces/IPersonalDetailsResponse';
import { selectUser } from '@store/user';
import { IUser } from '@shared/interfaces/IUser';
import { IProfileBooksResponse } from '@pages/profile/interfaces/IProfileBooksResponse';
import { IProfileAddedBookResponse } from '@pages/profile/interfaces/IProfileAddedBookResponse';

@Injectable()
export class ProfileEffects {
  constructor(
    private actions$: Actions,
    private profileService: ProfileService,
    private store: Store,
  ) {}

  fetchPersonalDetails$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProfileUiActions.fetchPersonalDetails),
      switchMap(() => {
        return this.store.select(selectIsAuth).pipe(
          skipWhile((isAuth: boolean) => !isAuth),
          switchMap(() => {
            return this.profileService.fetchPersonalDetails().pipe(
              map((response: IPersonalDetailsResponse) =>
                ProfileApiActions.fetchPersonalDetailsSuccess({ response }),
              ),
              catchError(() => of(ProfileApiActions.fetchPersonalDetailsFail())),
            );
          }),
        );
      }),
    );
  });

  updatePersonalDetails$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProfileUiActions.updatePersonalDetails),
      switchMap((action) => {
        return this.profileService.updatePersonalDetails(action.payload).pipe(
          map(() => ProfileApiActions.updatePersonalDetailsSuccess({ response: action.payload })),
          catchError(() => of(ProfileApiActions.updatePersonalDetailsFail())),
        );
      }),
    );
  });

  fetchProfileAddedBooks$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProfileUiActions.fetchProfileAddedBooks),
      switchMap(() => {
        return this.store.select(selectUser).pipe(
          skipWhile((user: IUser | null) => user === null),
          switchMap(() => {
            return this.profileService.fetchProfileAddedBooks().pipe(
              map((response: IProfileAddedBookResponse) => {
                return ProfileApiActions.fetchProfileAddedBooksSuccess({ response });
              }),
              catchError(() => {
                return of(ProfileApiActions.fetchProfileAddedBooksFail());
              }),
            );
          }),
        );
      }),
    );
  });

  fetchProfileViewedBooks$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProfileUiActions.fetchProfileViewedBooks),
      switchMap(() => {
        return this.store.select(selectUser).pipe(
          skipWhile((user: IUser | null) => user === null),
          switchMap(() => {
            return this.profileService.fetchProfileViewedBooks().pipe(
              map((response: IProfileBooksResponse) => {
                return ProfileApiActions.fetchProfileViewedBooksSuccess({ response });
              }),
              catchError(() => {
                return of(ProfileApiActions.fetchProfileViewedBooksFail());
              }),
            );
          }),
        );
      }),
    );
  });
}
