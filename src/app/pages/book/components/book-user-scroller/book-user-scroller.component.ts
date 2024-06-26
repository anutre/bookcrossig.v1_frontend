import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IBookOther } from '@pages/book/interfaces/IBookOther';

@Component({
  selector: 'app-book-user-scroller',
  templateUrl: './book-user-scroller.component.html',
  styleUrls: ['./book-user-scroller.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookUserScrollerComponent {
  @Input() title: string;

  @Input() usersList: IBookOther[] | null = [];

  constructor() {}

  trackByFn(index: number, obj: IBookOther) {
    return obj.id;
  }
}
