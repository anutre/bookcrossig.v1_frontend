import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ErrorRoutingModule } from './error-routing.module';
import { ImageModule } from '@shared/modules/image/image.module';
import { ErrorComponent } from './components/error/error.component';

@NgModule({
  declarations: [ErrorComponent],
  imports: [CommonModule, ErrorRoutingModule, ImageModule],
})
export class ErrorModule {}
