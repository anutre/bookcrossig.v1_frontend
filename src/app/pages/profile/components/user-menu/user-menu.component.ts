import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IUserNavItem } from '@shared/interfaces/IUserNavItem';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserMenuComponent {
  NAV_LIST: IUserNavItem[] = [
    {
      icon: 'user',
      text: 'Личные данные',
      path: '/profile/personal-details',
    },
    {
      icon: 'plus-rounded',
      text: 'Добавленные книги',
      path: '/profile/add-book',
    },
    {
      icon: 'book-saved',
      text: 'Просмотренные книги',
      path: '/profile/recent-books',
    },
    {
      icon: 'message-question',
      text: 'Помощь и поддержка',
      path: 'https://t.me/bookcrossing_io',
    },
    // {
    //   icon: 'trash',
    //   text: 'Удаление аккаунта',
    //   clickHandler: () => {
    //     console.log('DELETE ACC');
    //   },
    // },
  ];

  constructor() {}
}
