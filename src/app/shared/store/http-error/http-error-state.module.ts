import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { httpErrorFeatureKey, httpErrorReducer } from '@store/http-error/http-error.reducer';
import { EffectsModule } from '@ngrx/effects';
import { HttpErrorEffects } from '@store/http-error/http-error.effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(httpErrorFeatureKey, httpErrorReducer),
    EffectsModule.forFeature([HttpErrorEffects]),
  ],
})
export class HttpErrorStateModule {}
