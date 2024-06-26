import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { CountryISO } from 'ngx-intl-tel-input';
import { ControlService } from '@shared/modules/control/services/control.service';

@Component({
  selector: 'app-phone-control',
  templateUrl: './phone-control.component.html',
  styleUrls: ['./phone-control.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PhoneControlComponent {
  @Input() id?: number;

  @Input() name: string = 'default';

  @Input() value?: string;

  @Input() disabled?: boolean;

  @Input() label?: string;

  @Output() inputChange = new EventEmitter<any>();

  @ViewChild('inputRef') input: any | undefined;

  public CountryISO = CountryISO;

  constructor(private controlService: ControlService) {}

  countryChangeHandler() {
    if (this.input) {
      this.input.writeValue(this.value);
      setTimeout(() => {
        this.changeHandler();
      });
    }
  }

  changeHandler() {
    const phoneNumber = this.input.value;
    const countryCode = this.input.selectedCountry.iso2.toUpperCase();
    const isValidPhoneNumber = this.controlService.getIsPhoneValid(phoneNumber, countryCode);

    if (isValidPhoneNumber) {
      return this.inputChange.emit({
        value: this.controlService.getE164Number(phoneNumber, countryCode),
      });
    }

    this.inputChange.emit({
      value: this.controlService.getE164Number(phoneNumber, countryCode),
      errors: { phoneFormat: true },
    });
  }
}
