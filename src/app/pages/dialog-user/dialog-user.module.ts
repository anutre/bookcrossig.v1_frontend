import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DialogUserRoutingModule } from './dialog-user-routing.module';

import { HeaderModule } from '@shared/modules/header/header.module';
import { UserInfoModule } from '@shared/modules/user-info/user-info.module';
import { DialogUserStateModule } from '@pages/dialog-user/store';
import { DialogUserComponent } from '@pages/dialog-user/components/dialog-user/dialog-user.component';
import { ProductsListModule } from '@shared/modules/products-list/products-list.module';
import { ButtonModule } from '@shared/modules/button/button.module';
import { LinkModule } from '@shared/modules/link/link.module';

@NgModule({
  declarations: [DialogUserComponent],
  imports: [
    CommonModule,
    DialogUserRoutingModule,
    HeaderModule,
    UserInfoModule,
    ProductsListModule,
    ButtonModule,
    DialogUserStateModule,
    LinkModule,
  ],
})
export class DialogUserModule {}
