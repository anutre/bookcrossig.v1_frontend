import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { EmailConfirmModalModule } from '@shared/modules/email-confirm-modal/email-confirm-modal.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ProfileService } from '@pages/profile/services/profile.service';
import { profileFeatureKey, profileReducer } from '@pages/profile/store/profile.reducer';
import { ProfileEffects } from '@pages/profile/store/profile.effects';
import { DeleteAccountModule } from '@shared/modules/delete-account/delete-account.module';

@NgModule({
  declarations: [],
  providers: [ProfileService],
  imports: [
    CommonModule,
    MatDialogModule,
    EmailConfirmModalModule,
    DeleteAccountModule,
    StoreModule.forFeature(profileFeatureKey, profileReducer),
    EffectsModule.forFeature([ProfileEffects]),
  ],
})
export class ProfileStateModule {}
