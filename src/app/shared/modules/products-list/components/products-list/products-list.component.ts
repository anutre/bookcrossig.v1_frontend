import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IBook } from '@shared/interfaces/IBook';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsListComponent {
  @Input() books: IBook[] | null;

  @Input() emptyMessage: string = ``;

  @Input() isNicknameHidden: boolean = false;

  @Input() emptyImage: string = '/assets/images/empty-books.svg';

  @Input() hiddenActions: boolean = false;

  @Input() editAction: boolean = false;

  constructor() {}

  trackByFn(index: number, obj: IBook) {
    return obj.id;
  }
}
