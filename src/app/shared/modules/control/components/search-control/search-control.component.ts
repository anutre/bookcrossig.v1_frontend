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
  selector: 'app-search-control',
  templateUrl: './search-control.component.html',
  styleUrls: ['./search-control.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchControlComponent {
  public controlType = 'text';

  @Input() id?: number;

  @Input() name: string = 'default';

  @Input() placeholder: string = '';

  @Input() value?: string;

  @Input() disabled?: boolean;

  @Output() inputChange = new EventEmitter<any>();

  @ViewChild('inputRef') input: ElementRef | undefined;

  constructor() {}

  changeHandler() {
    this.inputChange.emit({ value: this.input?.nativeElement?.value });
  }
}
