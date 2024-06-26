import {
  AfterViewInit,
  Component,
  DoCheck,
  EventEmitter,
  forwardRef,
  Injector,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  NG_VALUE_ACCESSOR,
  NgControl,
  ValidationErrors,
} from '@angular/forms';
import { IInputChangeData } from '@shared/interfaces/IInputChangeData';
import { ControlService } from '@shared/modules/control/services/control.service';
import { debounceTime, distinctUntilChanged, filter, Subject } from 'rxjs';
import { ISelectControlSettings } from '@shared/modules/control/interfaces/ISelectControlSettings';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ControlComponent),
      multi: true,
    },
  ],
})
export class ControlComponent implements OnInit, ControlValueAccessor, AfterViewInit, DoCheck {
  @Input() template: string = 'text';

  @Input() type: string = 'text';

  @Input() name: string = 'default';

  @Input() delay: number = 0;

  @Input() label: string | undefined;

  @Input() labelIcon: { label: string; icon: string } | null | undefined = null;

  @Input() placeholder: string = '';

  @Input() mod?: string;

  @Input() settings: ISelectControlSettings = {
    optionVal: 'id',
    optionText: 'text',
    multiple: false,
  };

  @Input() options: any[] = [];

  @Input()
  set value(val) {
    this._value = val;
    this.onChange(this._value);
  }

  @Output() inputChange = new EventEmitter<any>();

  private _value: any;

  public control: FormControl | undefined;

  private controlErrors: ValidationErrors | null | undefined;

  private debounceSubject: Subject<IInputChangeData> = new Subject<IInputChangeData>();

  public errors: string[] = [];

  public id: number = Math.floor(Math.random() * 1e5) + 1;

  get value() {
    return this._value;
  }

  constructor(private injector: Injector, private controlService: ControlService) {}

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onChange(_: any) {}

  changeHandler(data: IInputChangeData) {
    this.writeValue(data.value);

    if (data.errors) {
      this.control?.setErrors(data.errors);
    }

    this.errors = this.controlService.getValidationErrors(this.control?.errors, this.name);

    this.debounceSubject.next(data);
  }

  writeValue(value: any) {
    this.value = value;
  }

  registerOnChange(fn: () => {}) {
    this.onChange = fn;
  }

  registerOnTouched() {}

  ngOnInit() {
    this.debounceSubject
      .pipe(filter(Boolean), distinctUntilChanged(), debounceTime(this.delay))
      .subscribe((data: IInputChangeData) => {
        this.inputChange.emit(data);
      });
  }

  ngAfterViewInit() {
    const ngControl: NgControl | null = this.injector.get(NgControl, null);

    if (ngControl) {
      this.control = ngControl.control as FormControl;
      this.controlErrors = this.control.errors;
    }
  }

  ngDoCheck() {
    if (this.control && this.control.touched && !this.errors.length) {
      this.errors = this.controlService.getValidationErrors(this.control.errors, this.name);
    }
  }
}
