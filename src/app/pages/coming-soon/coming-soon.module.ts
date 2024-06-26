import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComingSoonRoutingModule } from './coming-soon-routing.module';
import { ComingSoonComponent } from './components/coming-soon/coming-soon.component';
import { ImageModule } from '@shared/modules/image/image.module';
import { LinkModule } from '@shared/modules/link/link.module';

@NgModule({
  declarations: [ComingSoonComponent],
  imports: [CommonModule, ComingSoonRoutingModule, ImageModule, LinkModule],
})
export class ComingSoonModule {}
