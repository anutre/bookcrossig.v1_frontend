import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TextControlComponent } from './components/text-control/text-control.component';
import { TextareaControlComponent } from './components/textarea-control/textarea-control.component';
import { PhoneControlComponent } from './components/phone-control/phone-control.component';

import { RadioControlComponent } from './components/radio-control/radio-control.component';
import { AmountControlComponent } from './components/amount-control/amount-control.component';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';
import { FormsModule } from '@angular/forms';
import { CheckboxControlComponent } from './components/checkbox-control/checkbox-control.component';

import { IconModule } from '@shared/modules/icon/icon.module';
import { ControlService } from '@shared/modules/control/services/control.service';
import { ControlComponent } from '@shared/modules/control/components/control/control.component';
import { ControlErrorsComponent } from '@shared/modules/control/components/control-errors/control-errors.component';
import { IntlTelInputDirective } from '@shared/modules/control/directives/intl-tel-input.directive';
import { SearchControlComponent } from '@shared/modules/control/components/search-control/search-control.component';

import { ListControlComponent } from '@shared/modules/control/components/list-control/list-control.component';
import { ButtonModule } from '@shared/modules/button/button.module';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { SelectControlComponent } from '@shared/modules/control/components/select-control/select-control.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { EditTextControlComponent } from './components/edit-text-control/edit-text-control.component';
import { ImageModule } from '@shared/modules/image/image.module';
import { AppSharedPipeModule } from '@shared/pipes/app-shared-pipe.module';
import { TrimWhitespaceDirective } from '@shared/modules/control/directives/trim-whitespace.directive';

@NgModule({
  declarations: [
    ControlComponent,
    ControlErrorsComponent,
    TextControlComponent,
    TextareaControlComponent,
    PhoneControlComponent,
    IntlTelInputDirective,
    TrimWhitespaceDirective,
    RadioControlComponent,
    AmountControlComponent,
    CheckboxControlComponent,
    SearchControlComponent,
    SelectControlComponent,
    ListControlComponent,
    EditTextControlComponent,
  ],
  imports: [
    CommonModule,
    IconModule,
    MatRadioModule,
    MatCheckboxModule,
    FormsModule,
    NgxIntlTelInputModule,
    ButtonModule,
    MatSelectModule,
    MatFormFieldModule,
    ImageModule,
    AppSharedPipeModule,
  ],
  providers: [ControlService],
  exports: [
    ControlComponent,
    TextareaControlComponent,
    EditTextControlComponent,
    TrimWhitespaceDirective,
  ],
})
export class ControlModule {}
