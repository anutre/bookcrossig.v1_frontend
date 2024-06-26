import { ValidationErrors } from '@angular/forms';

export interface IInputChangeData {
  value: any;
  errors?: ValidationErrors;
}
