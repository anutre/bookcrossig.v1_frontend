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
  selector: 'app-textarea-control',
  templateUrl: './textarea-control.component.html',
  styleUrls: ['./textarea-control.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextareaControlComponent {
  public controlClass = 'c-textarea';

  @Input() id?: number;

  @Input() name: string = 'default';

  @Input() value: any = '';

  @Input() disabled?: boolean;

  @Input() placeholder?: string;

  @Input()
  set mod(mod: string | undefined) {
    if (!mod) {
      return;
    }

    this.controlClass += ` c-textarea--${mod}`;
  }

  @Output() inputChange = new EventEmitter<any>();

  @ViewChild('inputRef') input: ElementRef | undefined;

  changeHandler() {
    this.inputChange.emit({ value: this.input?.nativeElement?.value });
  }

  constructor() {}
}
