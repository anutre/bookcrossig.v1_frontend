import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BottomModalComponent } from './component/bottom-modal/bottom-modal.component';
import { ButtonModule } from '@shared/modules/button/button.module';

@NgModule({
  declarations: [BottomModalComponent],
  imports: [CommonModule, ButtonModule],
  exports: [BottomModalComponent],
})
export class BottomModalModule {}
