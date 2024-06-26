import { Component, Input } from '@angular/core';
import { IChatUser } from '@shared/interfaces/IChatUser';

@Component({
  selector: 'app-chat-user',
  templateUrl: './chat-user.component.html',
  styleUrls: ['./chat-user.component.scss'],
})
export class ChatUserComponent {
  @Input() receiveUser: IChatUser | null;

  constructor() {}
}
