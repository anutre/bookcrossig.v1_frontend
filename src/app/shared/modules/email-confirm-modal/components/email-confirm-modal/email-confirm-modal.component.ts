import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { UserUiActions } from '@store/user';

@Component({
  selector: 'app-email-confirm-modal',
  templateUrl: './email-confirm-modal.component.html',
  styleUrls: ['./email-confirm-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmailConfirmModalComponent {
  constructor(private store: Store) {}

  resendClickHandler() {
    this.store.dispatch(UserUiActions.resendEmailConfirmation());
  }
}
