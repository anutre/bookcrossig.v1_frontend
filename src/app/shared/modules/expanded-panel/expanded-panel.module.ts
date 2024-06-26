import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpandedPanelComponent } from './component/expanded-panel/expanded-panel.component';
import { MatExpansionModule } from '@angular/material/expansion';

@NgModule({
  declarations: [ExpandedPanelComponent],
  imports: [CommonModule, MatExpansionModule],
  exports: [ExpandedPanelComponent],
})
export class ExpandedPanelModule {}
