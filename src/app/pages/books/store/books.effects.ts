import { Injectable } from '@angular/core';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, skipWhile, switchMap } from 'rxjs';
import { BooksApiActions, BooksUiActions } from '@pages/books/store/index';
import { BooksService } from '@pages/books/services/books.service';
import { ISearchBooksResponse } from '@pages/books/interfaces/ISearchBooksResponse';
import { selectUser } from '@store/user';
import { IUser } from '@shared/interfaces/IUser';
import { Store } from '@ngrx/store';
import { ISearchBooksByIsbnResponse } from '@pages/books/interfaces/ISearchBooksByIsbnResponse';
import { IBooksAddResponse } from '@pages/books/interfaces/IBooksAddResponse';
import { selectRouteParam } from '@store/app';
import { BookApiActions } from '@pages/book/store';
import { Router } from '@angular/router';
import { HttpErrorService } from '@shared/services/http-error.service';

@Injectable()
export class BooksEffects {
  constructor(
    private actions$: Actions,
    private booksService: BooksService,
    private store: Store,
    private router: Router,
    private httpErrorService: HttpErrorService,
  ) {}

  booksInit$ = createEffect(
    () => {
      return this.actions$.pipe(ofType(BooksUiActions.booksInit));
    },
    { dispatch: false },
  );

  searchBooks$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(BooksUiActions.searchBooks),
      switchMap((action: { query: string }) =>
        this.booksService.searchBooks(action.query).pipe(
          map((response: ISearchBooksResponse) => BooksApiActions.searchBooksSuccess({ response })),
          catchError(() => of(BooksApiActions.searchBooksFail())),
        ),
      ),
    );
  });

  createBook$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(BooksUiActions.createBook),
      concatLatestFrom(() => this.store.select(selectRouteParam('isbn'))),
      switchMap(([action, isbn]) =>
        this.booksService.createBook(action.payload, isbn).pipe(
          map((response: IBooksAddResponse) => BooksApiActions.creteBookSuccess({ response })),
          catchError((e) =>
            of(BooksApiActions.creteBookFail(), this.httpErrorService.handleError(e)),
          ),
        ),
      ),
    );
  });

  fetchBookInfo$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(BooksUiActions.fetchBookInfo),
      concatLatestFrom(() => this.store.select(selectRouteParam('isbn'))),
      switchMap(([_action, isbn]) => {
        if (!isbn) return of(BookApiActions.fetchBookInfoFail());

        return this.store.select(selectUser).pipe(
          skipWhile((user: IUser | null) => user === null),
          switchMap(() =>
            this.booksService.fetchBook(isbn).pipe(
              map((response: ISearchBooksByIsbnResponse) =>
                BooksApiActions.fetchBookSuccess({ response }),
              ),
              catchError(() => of(BooksApiActions.fetchBookFail())),
            ),
          ),
        );
      }),
    );
  });

  createSuccessRedirect$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(BooksApiActions.creteBookSuccess),
        switchMap((action: { response: IBooksAddResponse }) =>
          of(this.router.navigateByUrl(`/book/${action.response.data.attributes.books.id}`)).pipe(
            map(() => of(BooksApiActions.goToCreatedBookSuccess)),
            catchError(() => of(BooksApiActions.goToCreatedBookFail)),
          ),
        ),
      );
    },
    { dispatch: false },
  );
}
