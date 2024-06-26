import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageSwitchPipe } from '@shared/pipes/image-path.pipe';

@NgModule({
  declarations: [ImageSwitchPipe],
  imports: [CommonModule],
  exports: [ImageSwitchPipe],
})
export class AppSharedPipeModule {}
