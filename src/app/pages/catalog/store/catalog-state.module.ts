import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { catalogFeatureKey, catalogReducer } from '@pages/catalog/store/catalog.reducer';
import { CatalogService } from '@pages/catalog/services/catalog.service';
import { EffectsModule } from '@ngrx/effects';
import { CatalogEffects } from '@pages/catalog/store/catalog.effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(catalogFeatureKey, catalogReducer),
    EffectsModule.forFeature([CatalogEffects]),
  ],
  providers: [CatalogService],
})
export class CatalogStateModule {}
