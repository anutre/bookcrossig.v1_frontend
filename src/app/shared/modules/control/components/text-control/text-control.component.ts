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
  selector: 'app-text-control',
  templateUrl: './text-control.component.html',
  styleUrls: ['./text-control.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextControlComponent {
  public controlClass = 'c-control';

  public inputClass = 'c-control__input';

  public controlType = 'text';

  public isPassword = false;

  @Input() id?: number;

  @Input() disabled?: boolean;

  @Input()
  set type(type: string) {
    if (!type) return;

    this.inputClass += ` c-control__input--${type}`;
    this.controlType = type;
    this.isPassword = type === 'password';
  }

  @Input()
  set mod(mod: string | undefined) {
    if (!mod) {
      return;
    }

    this.controlClass += ` c-control--${mod}`;
  }

  @Input() name: string = 'default';

  @Input() placeholder: string = '';

  @Input() value: string | undefined;

  @Input() label: string | undefined;

  @Output() inputChange = new EventEmitter<any>();

  @ViewChild('inputRef') input: ElementRef | undefined;

  constructor() {}

  eyeClickHandler() {
    if (this.controlType === 'text') {
      this.controlType = 'password';

      return;
    }

    this.controlType = 'text';
  }

  changeHandler() {
    this.inputChange.emit({ value: this.input?.nativeElement?.value });
  }
}
