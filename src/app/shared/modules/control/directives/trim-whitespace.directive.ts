import { Directive, ElementRef, HostListener } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[appTrimWhitespace]',
})
export class TrimWhitespaceDirective {
  constructor(private el: ElementRef, private ngControl: NgControl) {}

  @HostListener('blur') onBlur() {
    this.ngControl.control?.setValue(this.el.nativeElement.value.trim());
  }
}
