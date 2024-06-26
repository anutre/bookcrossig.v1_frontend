import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-list-control',
  templateUrl: './list-control.component.html',
  styleUrls: ['./list-control.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListControlComponent {
  public controlClass: string = 'c-list-control';

  public inputValue: string = '';

  @Input() id: number | undefined;

  @Input() name: string = 'default';

  @Input() list: string[] = [];

  @Input() placeholder: string = '';

  @Input() disabled?: boolean;

  @Input()
  set mod(mod: string | undefined) {
    if (!mod) {
      return;
    }

    this.controlClass += ` c-amount-control--${mod}`;
  }

  @Output() inputChange = new EventEmitter<any>();

  constructor(private cdr: ChangeDetectorRef) {}

  addClickHandler() {
    if (!this.inputValue) return;
    this.list = [...new Set([...this.list, this.inputValue])];

    this.inputValue = '';
    this.inputChange.emit({ value: this.list });
    this.cdr.detectChanges();
  }

  deleteClickHandler(value: string) {
    this.list = [...this.list.filter((el) => el !== value)];
    this.inputChange.emit({ value: this.list });
    this.cdr.detectChanges();
  }

  trackByKey = (index: number): number => {
    return index;
  };
}
