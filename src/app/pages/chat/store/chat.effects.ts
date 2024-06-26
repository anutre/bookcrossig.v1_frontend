import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { catchError, concatMap, first, map, of, skipWhile, switchMap } from 'rxjs';
import { ChatApiActions, ChatUiActions, selectReceiveUser } from '@pages/chat/store/index';
import { Store } from '@ngrx/store';
import { selectUser } from '@store/user';
import { IUser } from '@shared/interfaces/IUser';
import { ChatService } from '@pages/chat/services/chat.service';
import { IDialogResponse } from '@pages/chat/interfaces/IDialogResponse';
import { IChatUser } from '@shared/interfaces/IChatUser';
import { IDialogFormData } from '@pages/chat/interfaces/IDialogFormData';

@Injectable()
export class ChatEffects {
  constructor(private actions$: Actions, private store: Store, private chatService: ChatService) {}

  chatInit$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ChatUiActions.chatInit),
      concatMap((action: { id: string }) => {
        return [ChatUiActions.fetchDialog({ id: action.id })];
      }),
    );
  });

  fetchDialog$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ChatUiActions.fetchDialog),
      switchMap((action) =>
        this.store.select(selectUser).pipe(
          skipWhile((user: IUser | null) => user === null),
          switchMap(() => {
            return this.chatService.fetchDialog(action.id).pipe(
              map((response: IDialogResponse) => {
                return ChatApiActions.fetchDialogSuccess({ response });
              }),
              catchError(() => {
                return of(ChatApiActions.fetchDialogFail());
              }),
            );
          }),
        ),
      ),
    );
  });

  submitMessage$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ChatUiActions.submitMessage),
      switchMap((action: { formData: IDialogFormData }) =>
        this.store.select(selectReceiveUser).pipe(
          first(),
          skipWhile((receiveUser: IChatUser | null) => receiveUser === null),
          switchMap((receiveUser) => {
            return this.chatService.submitMessage(action.formData, receiveUser!.id).pipe(
              map((response: IDialogResponse) => {
                return ChatApiActions.submitMessageSuccess({ response });
              }),
              catchError(() => {
                return of(ChatApiActions.submitMessageFail());
              }),
            );
          }),
        ),
      ),
    );
  });
}
