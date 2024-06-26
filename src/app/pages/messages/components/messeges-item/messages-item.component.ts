import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IMessengerItem } from '@pages/messages/interfaces/IMessengerItem';

@Component({
  selector: 'app-messages-item',
  templateUrl: './messages-item.component.html',
  styleUrls: ['./messages-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MessagesItemComponent {
  @Input() chat: IMessengerItem;

  constructor() {}
}
