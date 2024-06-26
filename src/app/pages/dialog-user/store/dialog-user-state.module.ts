import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import {
  dialogUserFeatureKey,
  dialogUserReducer,
} from '@pages/dialog-user/store/dialog-user.reducer';
import { EffectsModule } from '@ngrx/effects';
import { DialogUserEffects } from '@pages/dialog-user/store/dialog-user.effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(dialogUserFeatureKey, dialogUserReducer),
    EffectsModule.forFeature([DialogUserEffects]),
  ],
})
export class DialogUserStateModule {}
