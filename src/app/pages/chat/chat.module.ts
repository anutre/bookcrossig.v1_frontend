import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

import { ChatRoutingModule } from './chat-routing.module';
import { ChatComponent } from './components/chat/chat.component';
import { ControlModule } from '@shared/modules/control/controls.module';
import { HeaderModule } from '@shared/modules/header/header.module';
import { DialogListComponent } from './components/dialog-list/dialog-list.component';
import { DialogItemComponent } from './components/dialog-item/dialog-item.component';
import { DialogFormComponent } from './components/dialog-form/dialog-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from '@shared/modules/button/button.module';
import { IconModule } from '@shared/modules/icon/icon.module';
import { ChatStateModule } from '@pages/chat/store';
import { DialogPlaceholderComponent } from './components/dialog-placeholder/dialog-placeholder.component';
import { ImageModule } from '@shared/modules/image/image.module';
import { ChatUserComponent } from '@pages/chat/components/chat-user/chat-user.component';

@NgModule({
  declarations: [
    ChatComponent,
    DialogListComponent,
    DialogItemComponent,
    DialogFormComponent,
    DialogPlaceholderComponent,
    ChatUserComponent,
  ],
  imports: [
    CommonModule,
    ChatRoutingModule,
    ControlModule,
    HeaderModule,
    IconModule,
    ReactiveFormsModule,
    ButtonModule,
    ChatStateModule,
    ImageModule,
    NgOptimizedImage,
  ],
})
export class ChatModule {}
