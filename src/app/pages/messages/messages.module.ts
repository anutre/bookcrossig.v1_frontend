import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MessagesRoutingModule } from './messages-routing.module';
import { ProductsListModule } from '@shared/modules/products-list/products-list.module';
import { RangesListModule } from '@shared/modules/ranges-list/ranges-list.module';
import { HeaderModule } from '@shared/modules/header/header.module';
import { ControlModule } from '@shared/modules/control/controls.module';
import { MessagesComponent } from '@pages/messages/components/messages/messages.component';
import { MessagesItemComponent } from '@pages/messages/components/messeges-item/messages-item.component';

import { ImageModule } from '@shared/modules/image/image.module';
import { MessagesStateModule } from '@pages/messages/store';
import { MessengerService } from '@pages/messages/services/messenger.service';
import { MessagesPlaceholderComponent } from '@pages/messages/components/messages-placeholder/messages-placeholder.component';

@NgModule({
  declarations: [MessagesComponent, MessagesItemComponent, MessagesPlaceholderComponent],
  imports: [
    CommonModule,
    MessagesRoutingModule,
    ProductsListModule,
    RangesListModule,
    HeaderModule,
    ImageModule,
    ControlModule,
    MessagesStateModule,
  ],
  providers: [MessengerService],
})
export class MessagesModule {}
