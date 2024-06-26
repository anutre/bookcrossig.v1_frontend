import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileLinkComponent } from './components/profile-link/profile-link.component';
import { IconModule } from '@shared/modules/icon/icon.module';
import { RouterLink } from '@angular/router';
import { ImageModule } from '@shared/modules/image/image.module';

@NgModule({
  declarations: [ProfileLinkComponent],
  imports: [CommonModule, IconModule, RouterLink, ImageModule],
  exports: [ProfileLinkComponent],
})
export class ProfileLinkModule {}
