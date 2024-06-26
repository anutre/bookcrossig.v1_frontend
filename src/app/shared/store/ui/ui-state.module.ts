import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { uiFeatureKey, uiReducer } from '@store/ui/ui.reducer';
import { EffectsModule } from '@ngrx/effects';
import { UiEffects } from '@store/ui/ui.effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(uiFeatureKey, uiReducer),
    EffectsModule.forFeature([UiEffects]),
  ],
})
export class UiStateModule {}
