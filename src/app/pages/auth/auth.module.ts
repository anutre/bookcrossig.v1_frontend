import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LinkModule } from '@shared/modules/link/link.module';
import { ButtonModule } from '@shared/modules/button/button.module';
import { HeaderModule } from '@shared/modules/header/header.module';
import { LinkGroupModule } from '@shared/modules/link-group/link-group.module';
import { ImageModule } from '@shared/modules/image/image.module';
import { OauthModule } from '@shared/modules/oauth/oauth.module';
import { ControlModule } from '@shared/modules/control/controls.module';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from '@pages/auth/components/login/login.component';
import { LoginFormComponent } from '@pages/auth/components/login-form/login-form.component';
import { RegistrationComponent } from '@pages/auth/components/registration/registration.component';
import { RegistrationFormComponent } from '@pages/auth/components/registration-form/registration-form.component';
import { AuthComponent } from './components/auth/auth.component';
import { AppleComponent } from '@pages/auth/components/apple/apple.component';

@NgModule({
  declarations: [
    LoginComponent,
    LoginFormComponent,
    RegistrationComponent,
    RegistrationFormComponent,
    AuthComponent,
    AppleComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    LinkModule,
    ButtonModule,
    HeaderModule,
    LinkGroupModule,
    ImageModule,
    OauthModule,
    ControlModule,
    ReactiveFormsModule,
  ],
})
export class AuthModule {}
