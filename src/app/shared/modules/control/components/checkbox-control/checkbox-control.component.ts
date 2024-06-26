import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';

@Component({
  selector: 'app-checkbox-control',
  templateUrl: './checkbox-control.component.html',
  styleUrls: ['./checkbox-control.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckboxControlComponent {
  public controlClass = 'c-checkbox';

  @Input() name: string = 'checkbox';

  @Input() value?: boolean;

  @Input() disabled?: boolean;

  @Input()
  set mod(mod: string | undefined) {
    if (!mod) {
      return;
    }

    this.controlClass += ` c-checkbox--${mod}`;
  }

  @Output() inputChange = new EventEmitter<any>();

  constructor() {}

  changeHandler(event: MatCheckboxChange) {
    this.inputChange.emit({ value: event.checked });
  }
}
