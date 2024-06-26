import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-messages-placeholder',
  templateUrl: './messages-placeholder.component.html',
  styleUrls: ['./messages-placeholder.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MessagesPlaceholderComponent {
  constructor() {}
}
