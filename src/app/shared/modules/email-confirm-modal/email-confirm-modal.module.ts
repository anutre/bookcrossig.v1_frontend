import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmailConfirmModalComponent } from './components/email-confirm-modal/email-confirm-modal.component';
import { ButtonModule } from '@shared/modules/button/button.module';
import { ImageModule } from '@shared/modules/image/image.module';
import { RouterLink } from '@angular/router';
import { MatDialogModule } from '@angular/material/dialog';
import { BottomModalModule } from '@shared/modules/bottom-modal/bottom-modal.module';

@NgModule({
  declarations: [EmailConfirmModalComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    ButtonModule,
    ImageModule,
    RouterLink,
    BottomModalModule,
  ],
  exports: [EmailConfirmModalComponent],
})
export class EmailConfirmModalModule {}
