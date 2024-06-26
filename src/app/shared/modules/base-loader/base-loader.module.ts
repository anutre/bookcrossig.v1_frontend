import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseLoaderComponent } from './components/base-loader/base-loader.component';
import { ImageModule } from '@shared/modules/image/image.module';

@NgModule({
  declarations: [BaseLoaderComponent],
  imports: [CommonModule, ImageModule],
  exports: [BaseLoaderComponent],
})
export class BaseLoaderModule {}
