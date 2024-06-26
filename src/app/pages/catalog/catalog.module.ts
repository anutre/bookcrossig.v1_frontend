import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { CatalogComponent } from './components/catalog/catalog.component';
import { RangesListModule } from '@shared/modules/ranges-list/ranges-list.module';
import { ProductsListModule } from '@shared/modules/products-list/products-list.module';
import { IconModule } from '@shared/modules/icon/icon.module';
import { CatalogHeaderComponent } from '@pages/catalog/components/catalog-header/catalog-header.component';
import { CatalogStateModule } from '@pages/catalog/store';
import { ProfileLinkModule } from '@shared/modules/profile-link/profile-link.module';
import { LinkModule } from '@shared/modules/link/link.module';
import { ThemeToggleModule } from '@shared/modules/theme-toggle/theme-toggle.module';

@NgModule({
  declarations: [CatalogComponent, CatalogHeaderComponent],
  imports: [
    CommonModule,
    CatalogStateModule,
    RangesListModule,
    ProductsListModule,
    IconModule,
    RouterModule,
    ProfileLinkModule,
    InfiniteScrollModule,
    LinkModule,
    ThemeToggleModule,
  ],
  exports: [CatalogComponent],
})
export class CatalogModule {}
