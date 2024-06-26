import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { MessagesApiActions, MessagesUiActions } from '@pages/messages/store/index';
import { catchError, concatMap, map, of, skipWhile, switchMap } from 'rxjs';
import { MessengerService } from '@pages/messages/services/messenger.service';
import { IMessengerResponse } from '@pages/messages/interfaces/IMessengerResponse';
import { Store } from '@ngrx/store';
import { selectUser } from '@store/user';
import { IUser } from '@shared/interfaces/IUser';
import { MetaUiActions } from '@store/meta';

@Injectable()
export class MessagesEffects {
  constructor(
    private actions$: Actions,
    private messengerService: MessengerService,
    private store: Store,
  ) {}

  messagesInit$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(MessagesUiActions.messagesInit),
      concatMap(() => {
        return [MessagesUiActions.fetchMessages(), MetaUiActions.unmarkMetaMessages()];
      }),
    );
  });

  fetchChats$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(MessagesUiActions.fetchMessages),
      switchMap(() =>
        this.store.select(selectUser).pipe(
          skipWhile((user: IUser | null) => user === null),
          switchMap(() => {
            return this.messengerService.fetchChats().pipe(
              map((response: IMessengerResponse) => {
                return MessagesApiActions.fetchMessagesSuccess({ response });
              }),
              catchError(() => {
                return of(MessagesApiActions.fetchMessagesFail());
              }),
            );
          }),
        ),
      ),
    );
  });
}
