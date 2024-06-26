import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IGroupedLink } from '@shared/interfaces/IGroupedLink';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthComponent {
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

  constructor(private router: Router) {}

  isAppleConfirmPage() {
    return this.router.url.includes('apple');
  }
}
