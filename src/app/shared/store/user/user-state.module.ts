import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from '@store/user/user.effects';
import { userFeatureKey, userReducer } from '@store/user/user.reducer';
import { UserService } from '@shared/services/user.service';
import { MatDialogModule } from '@angular/material/dialog';
import { EmailConfirmModalModule } from '@shared/modules/email-confirm-modal/email-confirm-modal.module';

@NgModule({
  declarations: [],
  providers: [UserService],
  imports: [
    CommonModule,
    MatDialogModule,
    EmailConfirmModalModule,
    StoreModule.forFeature(userFeatureKey, userReducer),
    EffectsModule.forFeature([UserEffects]),
  ],
})
export class UserStateModule {}
