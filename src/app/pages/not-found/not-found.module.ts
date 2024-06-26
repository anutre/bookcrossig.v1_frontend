import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotFoundRoutingModule } from './not-found-routing.module';

import { ImageModule } from '@shared/modules/image/image.module';
import { LinkModule } from '@shared/modules/link/link.module';
import { NotFoundComponent } from './components/not-found/not-found.component';

@NgModule({
  declarations: [NotFoundComponent],
  imports: [CommonModule, NotFoundRoutingModule, ImageModule, LinkModule],
})
export class NotFoundModule {}
