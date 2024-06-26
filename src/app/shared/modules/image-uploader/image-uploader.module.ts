import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImageUploaderComponent } from '@shared/modules/image-uploader/components/image-uploader/image-uploader.component';
import { ButtonModule } from '@shared/modules/button/button.module';
import { ImageModule } from '@shared/modules/image/image.module';
import { ImageUploaderService } from '@shared/modules/image-uploader/services/image-uploader.service';

@NgModule({
  declarations: [ImageUploaderComponent],
  imports: [CommonModule, ButtonModule, ImageModule],
  exports: [ImageUploaderComponent],
  providers: [ImageUploaderService],
})
export class ImageUploaderModule {}
