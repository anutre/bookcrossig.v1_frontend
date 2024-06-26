import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AuthUIActions } from '@store/auth';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-delete-account-modal',
  templateUrl: './delete-account-modal.component.html',
  styleUrls: ['./delete-account-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DeleteAccountModalComponent {
  constructor(private store: Store) {}

  confirmDeleteAccount() {
    this.store.dispatch(AuthUIActions.deleteAccount());
  }
}
