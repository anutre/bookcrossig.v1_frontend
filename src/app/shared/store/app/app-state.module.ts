import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { appFeatureKey, appReducer } from '@store/app/app.reducer';
import { AppEffects } from '@store/app/app.effects';

import { TermsModalModule } from '@shared/modules/terms-modal/terms-modal.module';
import { IntroModalModule } from '@shared/modules/intro-modal/intro-modal.module';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TermsModalModule,
    IntroModalModule,
    MatDialogModule,
    StoreModule.forFeature(appFeatureKey, appReducer),
    EffectsModule.forFeature([AppEffects]),
  ],
})
export class AppStateModule {}
