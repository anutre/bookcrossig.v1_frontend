import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';

import { HeaderModule } from '@shared/modules/header/header.module';
import { LinkGroupModule } from '@shared/modules/link-group/link-group.module';
import { ButtonModule } from '@shared/modules/button/button.module';
import { UserMenuComponent } from './components/user-menu/user-menu.component';
import { IconModule } from '@shared/modules/icon/icon.module';
import { UserMenuLinkComponent } from './components/user-menu-link/user-menu-link.component';
import { ProfileComponent } from './components/profile/profile.component';
import { UserInfoModule } from '@shared/modules/user-info/user-info.module';
import { LinkModule } from '@shared/modules/link/link.module';
import { PersonalDetailsComponent } from './components/personal-details/personal-details.component';
import { ControlModule } from '@shared/modules/control/controls.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ProfileStateModule } from '@pages/profile/store';
import { ExpandedPanelModule } from '@shared/modules/expanded-panel/expanded-panel.module';
import { ProfileAddedBooksComponent } from './components/profile-added-books/profile-added-books.component';
import { ProductsListModule } from '@shared/modules/products-list/products-list.module';
import { ProfileViewedBooksComponent } from './components/profile-viewed-books/profile-viewed-books.component';
import { ProfileBookListModule } from '@shared/modules/profile-book-list/profile-book-list.module';

@NgModule({
  declarations: [
    ProfileComponent,
    UserMenuComponent,
    UserMenuLinkComponent,
    PersonalDetailsComponent,
    ProfileAddedBooksComponent,
    ProfileViewedBooksComponent,
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    HeaderModule,
    LinkGroupModule,
    ButtonModule,
    IconModule,
    LinkModule,
    UserInfoModule,
    ControlModule,
    ReactiveFormsModule,
    ProfileStateModule,
    ExpandedPanelModule,
    ProductsListModule,
    ProfileBookListModule,
  ],
})
export class ProfileModule {}
