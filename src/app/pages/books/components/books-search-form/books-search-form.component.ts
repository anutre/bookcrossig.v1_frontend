import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IInputChangeData } from '@shared/interfaces/IInputChangeData';
import { Store } from '@ngrx/store';
import { BooksUiActions } from '@pages/books/store';

@Component({
  selector: 'app-books-search-form',
  templateUrl: './books-search-form.component.html',
  styleUrls: ['./books-search-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BooksSearchFormComponent {
  constructor(private store: Store) {}

  searchInputChangeHandler(data: IInputChangeData) {
    this.store.dispatch(BooksUiActions.updateSuggestQuery({ query: data.value }));

    if (data.value) {
      this.store.dispatch(BooksUiActions.searchBooks({ query: data.value }));
    }
  }
}
