import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeleteAccountModalComponent } from './component/delete-account-modal/delete-account-modal.component';
import { BottomModalModule } from '@shared/modules/bottom-modal/bottom-modal.module';
import { ButtonModule } from '@shared/modules/button/button.module';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [DeleteAccountModalComponent],
  imports: [CommonModule, BottomModalModule, ButtonModule, MatDialogModule],
  exports: [DeleteAccountModalComponent],
})
export class DeleteAccountModule {}
