import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ImageComponent } from './components/image/image.component';

@NgModule({
  declarations: [ImageComponent],
  imports: [CommonModule, NgOptimizedImage],
  exports: [ImageComponent],
})
export class ImageModule {}
