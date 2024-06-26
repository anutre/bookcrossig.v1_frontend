import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IUser } from '@shared/interfaces/IUser';
import { selectUser } from '@store/user';
import { selectIsAuth } from '@store/auth';

@Component({
  selector: 'app-profile-link',
  templateUrl: './profile-link.component.html',
  styleUrls: ['./profile-link.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileLinkComponent implements OnInit {
  public user$: Observable<IUser | null>;

  public isAuth$: Observable<boolean>;

  constructor(private store: Store) {}

  ngOnInit() {
    this.initValues();
  }

  private initValues() {
    this.user$ = this.store.select(selectUser);
    this.isAuth$ = this.store.select(selectIsAuth);
  }
}
