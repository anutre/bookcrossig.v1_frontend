import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { BooksComponent } from './components/books/books.component';
import { BooksFormComponent } from './components/books-form/books-form.component';
import { BooksSearchFormComponent } from '@pages/books/components/books-search-form/books-search-form.component';
import { ProductsListModule } from '@shared/modules/products-list/products-list.module';
import { HeaderModule } from '@shared/modules/header/header.module';
import { IconModule } from '@shared/modules/icon/icon.module';
import { ControlModule } from '@shared/modules/control/controls.module';
import { BooksStateModule } from '@pages/books/store';
import { ProfileLinkModule } from '@shared/modules/profile-link/profile-link.module';
import { BooksListComponent } from './components/books-list/books-list.component';
import { ProductModule } from '@shared/modules/product/product.module';
import { ImageModule } from '@shared/modules/image/image.module';
import { ImageUploaderModule } from '@shared/modules/image-uploader/image-uploader.module';
import { ButtonModule } from '@shared/modules/button/button.module';
import { LinkModule } from '@shared/modules/link/link.module';
import { FormDataSerializerService } from '@shared/services/form-data-serializer.service';
import { ReactiveFormsModule } from '@angular/forms';
import { LoaderModule } from '@shared/modules/loader/loader.module';

@NgModule({
  declarations: [BooksComponent, BooksFormComponent, BooksSearchFormComponent, BooksListComponent],
  imports: [
    CommonModule,
    BooksRoutingModule,
    ProductsListModule,
    HeaderModule,
    IconModule,
    ReactiveFormsModule,
    ControlModule,
    BooksStateModule,
    ProfileLinkModule,
    ProductModule,
    ImageModule,
    ImageUploaderModule,
    ButtonModule,
    LinkModule,
    LoaderModule,
  ],
  providers: [FormDataSerializerService],
})
export class BooksModule {}
