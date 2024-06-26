import { ValidatorFn } from '@angular/forms';

export interface IPersonalDetailFormField {
  id: string;
  type: 'text' | 'number';
  labelIcon?: { label: string; icon: string } | null | undefined;
  placeholder: string;
  validator: ValidatorFn[] | [];
}
