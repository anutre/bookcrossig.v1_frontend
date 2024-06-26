import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntroModalComponent } from './components/intro-modal/intro-modal.component';

import { ButtonModule } from '@shared/modules/button/button.module';
import { ImageModule } from '@shared/modules/image/image.module';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [IntroModalComponent],
  imports: [CommonModule, MatDialogModule, ButtonModule, ImageModule],
  exports: [IntroModalComponent],
})
export class IntroModalModule {}
