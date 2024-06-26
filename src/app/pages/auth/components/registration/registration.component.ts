import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IGroupedLink } from '@shared/interfaces/IGroupedLink';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegistrationComponent {
  public authLinks: IGroupedLink[] = [
    {
      name: 'Вход',
      path: '/auth/login',
    },
    {
      name: 'Регистрация',
      path: '/auth/registration',
    },
  ];

  constructor() {}
}
