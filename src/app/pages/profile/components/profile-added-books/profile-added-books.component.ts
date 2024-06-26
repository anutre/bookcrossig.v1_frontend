import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IBook } from '@shared/interfaces/IBook';
import { Store } from '@ngrx/store';
import { ProfileUiActions, selectProfileAddedBooks } from '@pages/profile/store';

@Component({
  selector: 'app-profile-added-books',
  templateUrl: './profile-added-books.component.html',
  styleUrls: ['./profile-added-books.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileAddedBooksComponent implements OnInit {
  public books$: Observable<IBook[]>;

  constructor(private store: Store) {}

  ngOnInit() {
    this.initValues();
    this.initComponent();
  }

  private initComponent() {
    this.store.dispatch(ProfileUiActions.fetchProfileAddedBooks());
  }

  private initValues() {
    this.books$ = this.store.select(selectProfileAddedBooks);
  }
}
