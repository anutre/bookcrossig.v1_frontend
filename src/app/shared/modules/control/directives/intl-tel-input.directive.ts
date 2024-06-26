import { Directive, ElementRef, HostListener } from '@angular/core';
import intlTelInput from 'intl-tel-input';

@Directive({
  selector: '[appIntlTelInput]',
})
export class IntlTelInputDirective {
  @HostListener('input', ['$event'])
  @HostListener('change', ['$event'])
  onInputChange(event: any) {
    const isNotEmpty = event.target.value.trim();
    const isInvalid = !this.iti.isValidNumber();

    if (isNotEmpty && isInvalid) {
      this.elRef.nativeElement.itiErrors = { phoneFormat: true };
      return;
    }

    this.elRef.nativeElement.itiErrors = null;
  }

  private readonly iti: any = null;

  constructor(private elRef: ElementRef) {
    const input = this.elRef.nativeElement;

    this.iti = intlTelInput(input, {
      // any initialisation options go here
      nationalMode: true,
      initialCountry: 'BY',
      onlyCountries: ['BY', 'UA', 'RU', 'KZ', 'GE', 'AZ'],
      formatOnDisplay: true,
      separateDialCode: true,
      utilsScript: 'https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.18/js/utils.js',
    });
  }
}
