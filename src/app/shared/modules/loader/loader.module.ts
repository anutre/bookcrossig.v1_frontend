import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './components/loader/loader.component';
import { ImageModule } from '@shared/modules/image/image.module';

@NgModule({
  declarations: [LoaderComponent],
  imports: [CommonModule, ImageModule],
  exports: [LoaderComponent],
})
export class LoaderModule {}
