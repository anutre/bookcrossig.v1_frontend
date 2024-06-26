import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import {
  BooksUiActions,
  selectIsBooksLoading,
  selectSearchBooks,
  selectSearchBooksQuery,
} from '@pages/books/store';
import { ISearchBook } from '@pages/books/interfaces/ISearchBook';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BooksComponent implements OnInit, OnDestroy {
  books$: Observable<ISearchBook[] | null>;

  query$: Observable<string>;

  loading$: Observable<boolean>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.initValues();
    this.initComponent();
  }

  private initValues() {
    this.books$ = this.store.select(selectSearchBooks);
    this.query$ = this.store.select(selectSearchBooksQuery);
    this.loading$ = this.store.select(selectIsBooksLoading);
  }

  private initComponent() {
    this.store.dispatch(BooksUiActions.booksInit({ query: '' }));
  }

  ngOnDestroy() {
    this.store.dispatch(BooksUiActions.resetSuggestion());
  }
}
