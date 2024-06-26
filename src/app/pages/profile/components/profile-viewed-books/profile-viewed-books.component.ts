import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IBook } from '@shared/interfaces/IBook';
import { Store } from '@ngrx/store';
import { ProfileUiActions, selectProfileViewedBooks } from '@pages/profile/store';

@Component({
  selector: 'app-profile-viewed-books',
  templateUrl: './profile-viewed-books.component.html',
  styleUrls: ['./profile-viewed-books.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileViewedBooksComponent implements OnInit {
  public books$: Observable<IBook[]>;

  constructor(private store: Store) {}

  ngOnInit() {
    this.initValues();
    this.initComponent();
  }

  private initComponent() {
    this.store.dispatch(ProfileUiActions.fetchProfileViewedBooks());
  }

  private initValues() {
    this.books$ = this.store.select(selectProfileViewedBooks);
  }
}
