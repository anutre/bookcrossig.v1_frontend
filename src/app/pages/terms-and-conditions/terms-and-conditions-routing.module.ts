import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TermsAndConditionsComponent } from '@pages/terms-and-conditions/components/terms-and-conditions/terms-and-conditions.component';

const routes: Routes = [
  {
    path: '',
    component: TermsAndConditionsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TermsAndConditionsRoutingModule {}
