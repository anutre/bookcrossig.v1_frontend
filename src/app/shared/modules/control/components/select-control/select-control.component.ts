import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { ISelectControlSettings } from '@shared/modules/control/interfaces/ISelectControlSettings';
import { MatSelectChange } from '@angular/material/select';

@Component({
  selector: 'app-select-control',
  templateUrl: './select-control.component.html',
  styleUrls: ['./select-control.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectControlComponent {
  public controlClass = 'c-select';

  @Input() name: string = 'default';

  @Input() placeholder: string = '';

  @Input() options: any[] = [];

  @Input() selectedOption: any;

  @Input() disabled?: boolean;

  @Input() settings: ISelectControlSettings;

  @Input()
  set mod(mod: string | undefined) {
    if (!mod) {
      return;
    }
    this.controlClass += ` c-select--${mod}`;
  }

  @Output() inputChange = new EventEmitter<any>();

  @ViewChild('inputRef') input: ElementRef | undefined;

  constructor() {}

  changeHandler(event: MatSelectChange) {
    this.inputChange.emit({ value: event.value });
  }
}
