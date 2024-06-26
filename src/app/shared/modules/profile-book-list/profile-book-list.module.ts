import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileBookListComponent } from './profile-book-list/profile-book-list.component';
import { HeaderModule } from '@shared/modules/header/header.module';
import { ProductsListModule } from '@shared/modules/products-list/products-list.module';

@NgModule({
  declarations: [ProfileBookListComponent],
  exports: [ProfileBookListComponent],
  imports: [CommonModule, HeaderModule, ProductsListModule],
})
export class ProfileBookListModule {}
