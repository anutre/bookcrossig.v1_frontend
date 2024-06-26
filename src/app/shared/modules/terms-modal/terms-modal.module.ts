import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TermsModalComponent } from './components/terms-modal/terms-modal.component';

import { ButtonModule } from '@shared/modules/button/button.module';
import { ImageModule } from '@shared/modules/image/image.module';
import { RouterLink } from '@angular/router';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [TermsModalComponent],
  imports: [CommonModule, MatDialogModule, ButtonModule, ImageModule, RouterLink],
  exports: [TermsModalComponent],
})
export class TermsModalModule {}
