import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { chatFeatureKey, chatReducer } from '@pages/chat/store/chat.reducer';
import { ChatService } from '@pages/chat/services/chat.service';
import { EffectsModule } from '@ngrx/effects';
import { ChatEffects } from '@pages/chat/store/chat.effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(chatFeatureKey, chatReducer),
    EffectsModule.forFeature([ChatEffects]),
  ],
  providers: [ChatService],
})
export class ChatStateModule {}
