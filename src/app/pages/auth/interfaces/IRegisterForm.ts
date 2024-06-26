import { FormControl } from '@angular/forms';

export interface IRegisterForm {
  nickname: FormControl<string | null>;
  email: FormControl<string | null>;
  password: FormControl<string | null>;
  agreement: FormControl<boolean | null>;
  personalAgreement: FormControl<boolean | null>;
}
