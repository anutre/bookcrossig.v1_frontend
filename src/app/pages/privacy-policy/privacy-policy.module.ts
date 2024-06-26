import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderModule } from '@shared/modules/header/header.module';
import { PrivacyPolicyComponent } from '@pages/privacy-policy/components/privacy-policy/privacy-policy.component';
import { ProfileLinkModule } from '@shared/modules/profile-link/profile-link.module';

const routes: Routes = [
  {
    path: '',
    component: PrivacyPolicyComponent,
  },
];

@NgModule({
  declarations: [PrivacyPolicyComponent],
  imports: [RouterModule.forChild(routes), HeaderModule, ProfileLinkModule],
  exports: [RouterModule],
})
export class PrivacyPolicyModule {}
