import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { MetaService } from '@shared/services/meta.service';
import { StoreModule } from '@ngrx/store';
import { geoFeatureKey, geoReducer } from '@store/geo/geo.reducer';
import { GeoEffects } from '@store/geo/geo.effects';

@NgModule({
  declarations: [],
  providers: [MetaService],
  imports: [
    CommonModule,
    StoreModule.forFeature(geoFeatureKey, geoReducer),
    EffectsModule.forFeature([GeoEffects]),
  ],
})
export class GeoStateModule {}
