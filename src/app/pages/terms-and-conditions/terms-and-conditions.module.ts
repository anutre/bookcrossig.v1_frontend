import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TermsAndConditionsRoutingModule } from './terms-and-conditions-routing.module';
import { TermsAndConditionsComponent } from './components/terms-and-conditions/terms-and-conditions.component';

@NgModule({
  declarations: [TermsAndConditionsComponent],
  imports: [CommonModule, TermsAndConditionsRoutingModule],
})
export class TermsAndConditionsModule {}
