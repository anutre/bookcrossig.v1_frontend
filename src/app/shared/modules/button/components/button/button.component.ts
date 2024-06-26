import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  public btnClass: string;

  public btnType: string;

  @Input() disabled: boolean | null = false;

  @Input()
  set mode(variants: string[]) {
    if (!variants) return;
    this.btnType = variants.join(' ');
    this.btnClass = variants.reduce((classes, mode) => `${classes} c-button--${mode}`, '');
  }

  @Input() type: string = 'submit';

  @Output() btnClick = new EventEmitter<any>();

  clickHandler() {
    this.btnClick.emit();
  }
}
