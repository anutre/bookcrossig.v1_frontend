import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import {
  DialogUserUiActions,
  selectDialogUser,
  selectDialogUserBooks,
  selectDialogUserSubs,
} from '@pages/dialog-user/store';
import { Observable } from 'rxjs';
import { IDialogUser } from '@pages/dialog-user/interfaces/IDialogUser';
import { IBook } from '@shared/interfaces/IBook';
import { selectUser } from '@store/user';
import { IUser } from '@shared/interfaces/IUser';

@Component({
  selector: 'app-dialog-user',
  templateUrl: './dialog-user.component.html',
  styleUrls: ['./dialog-user.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogUserComponent implements OnInit {
  public id: string;

  public user$: Observable<IDialogUser | null>;

  public mainUser$: Observable<IUser | null>;

  public subscription$: Observable<boolean>;

  public books$: Observable<IBook[]>;

  constructor(private route: ActivatedRoute, private store: Store) {}

  ngOnInit() {
    this.initValues();
    this.initComponent();
  }

  private initComponent() {
    this.store.dispatch(DialogUserUiActions.dialogUserInit({ id: this.id }));
  }

  private initValues() {
    this.id = this.route.snapshot.params['id'];
    this.user$ = this.store.select(selectDialogUser);
    this.subscription$ = this.store.select(selectDialogUserSubs);
    this.books$ = this.store.select(selectDialogUserBooks);
    this.mainUser$ = this.store.select(selectUser);
  }

  subscribeClickHandler() {
    this.store.dispatch(DialogUserUiActions.subscribeOnDialogUser());
  }

  isNotEqualMainUser(mainUser: IUser | null, currentUser: IDialogUser | null): boolean {
    return mainUser?.nickname !== currentUser?.nickname;
  }
}
