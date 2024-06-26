import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from '@shared/interfaces/IUser';
import { selectUser, UserUiActions } from '@store/user';
import { Store } from '@ngrx/store';
import { AuthUIActions } from '@store/auth';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileComponent implements OnInit {
  public user$: Observable<IUser | null>;

  constructor(private store: Store) {}

  ngOnInit() {
    this.initValues();
    this.initComponent();
  }

  logoutClickHandler() {
    this.store.dispatch(AuthUIActions.logout());
  }

  private initValues() {
    this.user$ = this.store.select(selectUser);
  }

  private initComponent() {
    this.store.dispatch(UserUiActions.fetchUser());
  }
}
