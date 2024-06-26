import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { MetaEffects } from '@store/meta/meta.effects';
import { MetaService } from '@shared/services/meta.service';
import { StoreModule } from '@ngrx/store';
import { metaFeatureKey, metaReducer } from '@store/meta/meta.reducer';

@NgModule({
  declarations: [],
  providers: [MetaService],
  imports: [
    CommonModule,
    StoreModule.forFeature(metaFeatureKey, metaReducer),
    EffectsModule.forFeature([MetaEffects]),
  ],
})
export class MetaStateModule {}
