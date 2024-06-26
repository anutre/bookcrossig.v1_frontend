import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { MatRadioChange } from '@angular/material/radio';

@Component({
  selector: 'app-radio-control',
  templateUrl: './radio-control.component.html',
  styleUrls: ['./radio-control.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RadioControlComponent {
  public controlClass = 'c-radio-group';

  @Input() id?: number;

  @Input() name: string = 'default';

  @Input() value?: string;

  @Input() disabled?: boolean;

  @Input() options?: any[];

  @Output() inputChange = new EventEmitter<any>();

  @Input()
  set mod(mod: string | undefined) {
    if (!mod) {
      return;
    }
    this.controlClass += ` c-radio-group--${mod}`;
  }

  @ViewChild('inputRef') input: ElementRef | undefined;

  constructor() {}

  changeHandler(event: MatRadioChange) {
    this.inputChange.emit({ value: event.value });
  }
}
