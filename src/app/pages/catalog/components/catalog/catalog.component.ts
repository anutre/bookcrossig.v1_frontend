import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IBook } from '@shared/interfaces/IBook';
import { Store } from '@ngrx/store';
import { CatalogUiActions, selectBooks } from '@pages/catalog/store';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CatalogComponent implements OnInit {
  public books$: Observable<IBook[]>;

  constructor(private store: Store) {}

  ngOnInit() {
    this.initValues();
    this.initComponent();
  }

  onScroll() {
    this.store.dispatch(CatalogUiActions.fetchCatalog({ paginated: true }));
  }

  private initValues() {
    this.books$ = this.store.select(selectBooks);
  }

  private initComponent() {
    this.store.dispatch(CatalogUiActions.catalogInit());
  }
}
