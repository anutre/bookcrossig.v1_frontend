import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { messagesFeatureKey, messagesReducer } from '@pages/messages/store/messages.reducer';
import { MessagesEffects } from '@pages/messages/store/messages.effects';
import { MessengerService } from '@pages/messages/services/messenger.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(messagesFeatureKey, messagesReducer),
    EffectsModule.forFeature([MessagesEffects]),
  ],
  providers: [MessengerService],
})
export class MessagesStateModule {}
