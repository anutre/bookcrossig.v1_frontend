import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IBookRecommendation } from '@pages/book/interfaces/IBookRecommendation';

@Component({
  selector: 'app-book-scroller',
  templateUrl: './book-scroller.component.html',
  styleUrls: ['./book-scroller.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookScrollerComponent {
  @Input() title: string;

  @Input() booksList: IBookRecommendation[] | null = [];

  constructor() {}

  trackByFn(index: number, obj: IBookRecommendation) {
    return obj.id;
  }
}
