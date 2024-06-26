import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ILoginForm } from '../../interfaces/ILoginForm';
import { regexMap } from '@config/regex.config';
import { Store } from '@ngrx/store';
import { ILoginFormData } from '../../interfaces/ILoginFormData';

import { AuthUIActions } from '@store/auth';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginFormComponent implements OnInit {
  public form: FormGroup<ILoginForm>;

  constructor(private fb: FormBuilder, private store: Store) {}

  ngOnInit() {
    this.initValues();
  }

  private initValues(): void {
    this.form = this.fb.group({
      email: this.fb.control<string | null>('', [
        Validators.required,
        Validators.pattern(regexMap.emailPattern),
      ]),
      password: this.fb.control<string | null>('', [Validators.required]),
    });
  }

  submitHandler(): void {
    this.form.markAllAsTouched();

    const { email, password } = this.form.value;

    if (this.form.invalid || !email || !password) return;

    const loginData: ILoginFormData = {
      email,
      password,
    };

    this.store.dispatch(AuthUIActions.login({ loginData }));
  }
}
