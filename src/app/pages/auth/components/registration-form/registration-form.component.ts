import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { regexMap } from '@config/regex.config';
import { IRegisterForm } from '@pages/auth/interfaces/IRegisterForm';
import { AuthUIActions } from '@store/auth';
import { Store } from '@ngrx/store';
import { IRegisterFormData } from '@pages/auth/interfaces/IRegisterFormData';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss', '../login-form/login-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegistrationFormComponent {
  public form: FormGroup<IRegisterForm> = this.fb.group({
    nickname: this.fb.control<string | null>(null, [Validators.required]),
    email: this.fb.control<string | null>(null, [
      Validators.required,
      Validators.pattern(regexMap.emailPattern),
    ]),
    password: this.fb.control<string | null>(null, [Validators.required, Validators.minLength(8)]),
    agreement: this.fb.control<boolean>(false, [Validators.requiredTrue]),
    personalAgreement: this.fb.control<boolean>(false),
  });

  constructor(private fb: FormBuilder, private store: Store) {}

  submitHandler() {
    this.form.markAllAsTouched();

    const { nickname, email, password, agreement, personalAgreement } = this.form.value;

    if (this.form.invalid || !email || !password || !nickname || !agreement) return;

    const registerData: IRegisterFormData = {
      email,
      password,
      nickname,
      agreement,
      personalAgreement: !!personalAgreement,
    };

    this.store.dispatch(AuthUIActions.register({ registerData }));
  }
}
