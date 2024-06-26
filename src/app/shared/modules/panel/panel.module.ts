import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelComponent } from '@shared/modules/panel/components/panel/panel.component';
import { RouterModule } from '@angular/router';
import { IconModule } from '@shared/modules/icon/icon.module';

@NgModule({
  declarations: [PanelComponent],
  imports: [CommonModule, RouterModule, IconModule],
  exports: [PanelComponent],
})
export class PanelModule {}
