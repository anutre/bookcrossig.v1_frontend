import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '@pages/auth/components/login/login.component';
import { RegistrationComponent } from '@pages/auth/components/registration/registration.component';
import { AuthComponent } from '@pages/auth/components/auth/auth.component';
import { AppleComponent } from '@pages/auth/components/apple/apple.component';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'registration',
        component: RegistrationComponent,
      },
      {
        path: 'apple',
        component: AppleComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
