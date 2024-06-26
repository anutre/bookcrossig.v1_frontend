import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { ProductModule } from '@shared/modules/product/product.module';
import { ImageModule } from '@shared/modules/image/image.module';
import { LinkModule } from '@shared/modules/link/link.module';

@NgModule({
  declarations: [ProductsListComponent],
  imports: [CommonModule, ProductModule, ImageModule, LinkModule],
  exports: [ProductsListComponent],
})
export class ProductsListModule {}
