import { Injectable } from '@angular/core';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import {
  DialogUserApiActions,
  DialogUserUiActions,
  selectDialogUser,
} from '@pages/dialog-user/store/index';
import { catchError, concatMap, map, of, skipWhile, switchMap } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectUser } from '@store/user';
import { IUser } from '@shared/interfaces/IUser';
import { DialogUserService } from '@pages/dialog-user/services/dialog-user.service';
import { IDialogUserResponse } from '@pages/dialog-user/interfaces/IDialogUserResponse';
import { IDialogUserSubsResponse } from '@pages/dialog-user/interfaces/IDialogUserSubsResponse';

@Injectable()
export class DialogUserEffects {
  constructor(
    private actions$: Actions,
    private store: Store,
    private dialogUserService: DialogUserService,
  ) {}

  dialogUserInit$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(DialogUserUiActions.dialogUserInit),
      concatMap((action: { id: string }) => {
        return [DialogUserUiActions.fetchDialogUser(action)];
      }),
    );
  });

  fetchDialogUser$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(DialogUserUiActions.fetchDialogUser),
      switchMap((action: { id: string }) => {
        return this.store.select(selectUser).pipe(
          skipWhile((user: IUser | null) => user === null),
          switchMap(() => {
            return this.dialogUserService.fetchDialogUser(action.id).pipe(
              map((response: IDialogUserResponse) => {
                return DialogUserApiActions.fetchDialogUserSuccess({ response });
              }),
              catchError(() => {
                return of(DialogUserApiActions.fetchDialogUserFail());
              }),
            );
          }),
        );
      }),
    );
  });

  subscribeOnDialogUser$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(DialogUserUiActions.subscribeOnDialogUser),
      concatLatestFrom(() => this.store.select(selectDialogUser)),
      switchMap(([_action, user]) => {
        return this.dialogUserService.subscribeOnDialogUser(user!.id).pipe(
          map((response: IDialogUserSubsResponse) => {
            return DialogUserApiActions.dialogSubscribeSuccess({ response });
          }),
          catchError(() => {
            return of(DialogUserApiActions.dialogSubscribeFail());
          }),
        );
      }),
    );
  });
}
