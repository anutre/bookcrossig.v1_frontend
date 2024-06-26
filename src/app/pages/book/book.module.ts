import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookRoutingModule } from './book-routing.module';
import { BookComponent } from './components/book/book.component';
import { HeaderModule } from '@shared/modules/header/header.module';
import { IconModule } from '@shared/modules/icon/icon.module';
import { ProductsListModule } from '@shared/modules/products-list/products-list.module';
import { ProfileLinkModule } from '@shared/modules/profile-link/profile-link.module';
import { ImageModule } from '@shared/modules/image/image.module';
import { ButtonModule } from '@shared/modules/button/button.module';
import { BookStateModule } from '@pages/book/store';
import { BadgesModule } from '@shared/modules/badges/badges.module';
import { LightgalleryModule } from 'lightgallery/angular';
import { BookScrollerComponent } from '@pages/book/components/book-scroller/book-scroller.component';
import { BookUserScrollerComponent } from './components/book-user-scroller/book-user-scroller.component';
import { ControlModule } from '@shared/modules/control/controls.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ImageUploaderModule } from '@shared/modules/image-uploader/image-uploader.module';
import { BookEditFormComponent } from '@pages/book/components/book-edit-form/book-edit-form.component';
import { FormDataSerializerService } from '@shared/services/form-data-serializer.service';
import { LoaderModule } from '@shared/modules/loader/loader.module';
import { AppSharedPipeModule } from '@shared/pipes/app-shared-pipe.module';
import { LinkModule } from '@shared/modules/link/link.module';

@NgModule({
  declarations: [
    BookComponent,
    BookScrollerComponent,
    BookUserScrollerComponent,
    BookEditFormComponent,
  ],
  imports: [
    CommonModule,
    BookRoutingModule,
    HeaderModule,
    IconModule,
    ProductsListModule,
    ProfileLinkModule,
    ImageModule,
    ButtonModule,
    BookStateModule,
    BadgesModule,
    LightgalleryModule,
    ControlModule,
    ReactiveFormsModule,
    ImageUploaderModule,
    LoaderModule,
    AppSharedPipeModule,
    LinkModule,
  ],
  providers: [FormDataSerializerService],
})
export class BookModule {}
