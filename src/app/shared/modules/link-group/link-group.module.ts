import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LinkModule } from '@shared/modules/link/link.module';
import { LinkGroupComponent } from './components/link-group/link-group.component';

@NgModule({
  declarations: [LinkGroupComponent],
  imports: [CommonModule, LinkModule],
  exports: [LinkGroupComponent],
})
export class LinkGroupModule {}
