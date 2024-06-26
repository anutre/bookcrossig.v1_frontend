import { Injectable } from '@angular/core';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { catchError, concatMap, map, of, skipWhile, switchMap } from 'rxjs';
import { BookApiActions, BookUiActions } from '@pages/book/store/index';
import { Store } from '@ngrx/store';
import { selectRouteParam } from '@store/app';
import { BookService } from '@pages/book/services/book.service';
import { IBookResponse } from '@pages/book/interfaces/IBookResponse';
import { IBookViewResponse } from '@pages/book/interfaces/IBookViewResponse';
import { selectUser } from '@store/user';
import { IUser } from '@shared/interfaces/IUser';
import { selectIsAuth } from '@store/auth';
import { IBookStatusResponse } from '@pages/book/interfaces/IBookStatusResponse';
import { Router } from '@angular/router';
import { IBookRequestResponse } from '@pages/book/interfaces/IBookRequestResponse';
import { BooksApiActions } from '@pages/books/store';
import { IBooksAddResponse } from '@pages/books/interfaces/IBooksAddResponse';
import { IBookUpdateResponse } from '@pages/book/interfaces/IBookUpdateResponse';

@Injectable()
export class BookEffects {
  bookInit$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(BookUiActions.bookInit),
      concatMap(() => {
        return [BookUiActions.fetchBookInfo(), BookUiActions.fetchBookStatus()];
      }),
    );
  });

  fetchBook$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(BookUiActions.fetchBookInfo),
      concatLatestFrom(() => this.store.select(selectRouteParam('id'))),
      switchMap(([_action, bookId]) => {
        if (!bookId) {
          return of(BookApiActions.fetchBookInfoFail());
        }

        return this.bookService.fetchBook(bookId).pipe(
          map((response: IBookResponse) => {
            return BookApiActions.fetchBookInfoSuccess({ response });
          }),
          catchError(() => {
            return of(BookApiActions.fetchBookInfoFail());
          }),
        );
      }),
    );
  });

  fetchBookStatus$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(BookUiActions.fetchBookStatus),
      concatLatestFrom(() => {
        return [this.store.select(selectIsAuth), this.store.select(selectRouteParam('id'))];
      }),
      switchMap(([_action, isAuth, bookId]) => {
        if (!bookId || !isAuth) {
          return of(BookApiActions.fetchBookStatusFail());
        }

        return this.bookService.fetchBookStatus(bookId).pipe(
          map((response: IBookStatusResponse) => {
            return BookApiActions.fetchBookStatusSuccess({ response });
          }),
          catchError(() => {
            return of(BookApiActions.fetchBookStatusFail());
          }),
        );
      }),
    );
  });

  requestBook$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(BookUiActions.requestBook),
      concatLatestFrom(() => {
        return [this.store.select(selectIsAuth), this.store.select(selectRouteParam('id'))];
      }),
      switchMap(([_action, isAuth, bookId]) => {
        if (!isAuth) {
          this.router.navigateByUrl('/auth/login');
        }

        if (!bookId) {
          return of(BookApiActions.fetchBookStatusFail());
        }

        return this.bookService.requestBook(bookId).pipe(
          map((response: IBookRequestResponse) => {
            return BookApiActions.requestBookSuccess({ response });
          }),
          catchError(() => {
            return of(BookApiActions.requestBookFail());
          }),
        );
      }),
    );
  });

  viewBook$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(BookUiActions.fetchBookInfo),
      switchMap(() => {
        return this.store.select(selectUser).pipe(
          skipWhile((user: IUser | null) => user === null),
          concatLatestFrom(() => this.store.select(selectRouteParam('id'))),
          switchMap(([_user, id]) => {
            if (!id) {
              return of(BookApiActions.fetchBookInfoFail());
            }

            return this.bookService.viewBook(id).pipe(
              map((response: IBookViewResponse) => {
                return BookApiActions.viewBookSuccess({ response });
              }),
              catchError(() => {
                return of(BookApiActions.viewBookFail());
              }),
            );
          }),
        );
      }),
    );
  });

  updateBook$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(BookUiActions.updateBook),
      concatLatestFrom(() => this.store.select(selectRouteParam('id'))),
      switchMap(([action, id]) => {
        return this.bookService.updateBook(action.payload, id).pipe(
          map((response: IBooksAddResponse) => BookApiActions.updateBookDataSuccess({ response })),
          catchError(() => of(BookApiActions.updateBookDataFail())),
        );
      }),
    );
  });

  createSuccessRedirect$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(BookApiActions.updateBookDataSuccess),
        switchMap((action: { response: IBookUpdateResponse }) =>
          of(this.router.navigateByUrl(`/book/${action.response.data.attributes.books.id}`)).pipe(
            map(() => of(BooksApiActions.goToCreatedBookSuccess)),
            catchError(() => of(BooksApiActions.goToCreatedBookFail)),
          ),
        ),
      );
    },
    { dispatch: false },
  );

  constructor(
    private actions$: Actions,
    private store: Store,
    private bookService: BookService,
    private router: Router,
  ) {}
}
