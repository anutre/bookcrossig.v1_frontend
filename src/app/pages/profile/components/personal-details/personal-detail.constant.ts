import { IPersonalDetailFormField } from '@pages/profile/interfaces/IPersonalDetailsFormField';
import { Validators } from '@angular/forms';

export const PersonalDetailFields: IPersonalDetailFormField[] = [
  {
    id: 'nickname',
    type: 'text',
    labelIcon: {
      label: 'Никнейм',
      icon: 'user',
    },
    placeholder: 'Только английские буквы',
    validator: [Validators.required],
  },
  {
    id: 'name',
    type: 'text',
    labelIcon: {
      label: 'Имя',
      icon: 'user',
    },
    placeholder: 'Ваше имя',
    validator: [Validators.required],
  },
];
