import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RangeItemComponent } from './components/range-item/range-item.component';
import { RangesListComponent } from './components/ranges-list/ranges-list.component';
import { IconModule } from '@shared/modules/icon/icon.module';
import { ButtonModule } from '@shared/modules/button/button.module';

@NgModule({
  declarations: [RangeItemComponent, RangesListComponent],
  imports: [CommonModule, IconModule, ButtonModule],
  exports: [RangesListComponent],
})
export class RangesListModule {}
