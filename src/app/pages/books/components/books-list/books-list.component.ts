import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ISearchBook } from '@pages/books/interfaces/ISearchBook';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BooksListComponent {
  @Input() books: ISearchBook[] | null;

  constructor() {}

  trackByFn(index: number, obj: ISearchBook) {
    return obj.isbn;
  }
}
