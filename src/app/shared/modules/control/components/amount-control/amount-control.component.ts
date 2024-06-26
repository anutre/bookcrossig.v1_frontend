import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-amount-control',
  templateUrl: './amount-control.component.html',
  styleUrls: ['./amount-control.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AmountControlComponent {
  public controlClass = 'c-amount-control';

  @Input() id?: number;

  @Input() disabled?: boolean;

  @Input() name: string = 'default';

  @Input() value: number = 1;

  @Output() inputChange = new EventEmitter<any>();

  @Input()
  set mod(mod: string | undefined) {
    if (!mod) {
      return;
    }

    this.controlClass += ` c-amount-control--${mod}`;
  }

  @ViewChild('inputRef') input!: ElementRef;

  public currentValue: number = this.value;

  constructor() {}

  changeHandler() {
    this.currentValue = this.getFormatterAmount(parseFloat(this.input?.nativeElement?.value));
    this.updateAmountControl();
  }

  plusClickHandler() {
    this.currentValue = this.getFormatterAmount(parseFloat(this.input?.nativeElement?.value) + 1);
    this.updateAmountControl();
  }

  minusClickHandler() {
    this.currentValue = this.getFormatterAmount(parseFloat(this.input?.nativeElement?.value) - 1);
    this.updateAmountControl();
  }

  private getFormatterAmount(amount: number): number {
    if (!amount || amount <= 0 || isNaN(amount)) {
      return 1;
    }

    return Math.ceil(amount);
  }

  private updateAmountControl() {
    this.input.nativeElement.value = this.currentValue;
    this.inputChange.emit({ value: this.currentValue });
  }
}
