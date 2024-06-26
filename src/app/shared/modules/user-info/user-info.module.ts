import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserInfoComponent } from '@shared/modules/user-info/components/user-info/user-info.component';
import { ImageModule } from '@shared/modules/image/image.module';

@NgModule({
  declarations: [UserInfoComponent],
  imports: [CommonModule, ImageModule],
  exports: [UserInfoComponent],
})
export class UserInfoModule {}
