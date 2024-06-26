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
  selector: 'app-edit-text-control',
  templateUrl: './edit-text-control.component.html',
  styleUrls: ['./edit-text-control.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditTextControlComponent {
  public controlClass = 'c-control';

  public inputClass = 'c-control__input';

  public controlType = 'text';

  public isEditorMode = false;

  @Input() id?: number;

  @Input() disabled?: boolean;

  @Input()
  set type(type: string) {
    if (!type) return;

    this.inputClass += ` c-control__input--${type}`;
    this.controlType = type;
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

  @Input() labelIcon: { label: string; icon: string } | null | undefined;

  @Output() inputChange = new EventEmitter<any>();

  @ViewChild('inputRef') input: ElementRef | undefined;

  eyeClickHandler() {
    if (this.isEditorMode) {
      this.inputChange.emit({ value: this.input?.nativeElement?.value });
    }
    this.isEditorMode = !this.isEditorMode;
  }
}
