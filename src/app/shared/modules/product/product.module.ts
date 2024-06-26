import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './components/product/product.component';
import { ImageModule } from '@shared/modules/image/image.module';
import { ButtonModule } from '@shared/modules/button/button.module';
import { IconModule } from '@shared/modules/icon/icon.module';
import { RouterLink } from '@angular/router';
import { BadgesModule } from '@shared/modules/badges/badges.module';
import { AppSharedPipeModule } from '@shared/pipes/app-shared-pipe.module';

@NgModule({
  declarations: [ProductComponent],
  imports: [
    CommonModule,
    ImageModule,
    ButtonModule,
    IconModule,
    RouterLink,
    BadgesModule,
    AppSharedPipeModule,
  ],
  exports: [ProductComponent],
})
export class ProductModule {}
