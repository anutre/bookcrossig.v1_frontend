import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IDialogMessage } from '@pages/chat/interfaces/IDialogMessage';

@Component({
  selector: 'app-dialog-list',
  templateUrl: './dialog-list.component.html',
  styleUrls: ['./dialog-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogListComponent {
  @Input() messages: IDialogMessage[] | null;

  constructor() {}

  trackByKey = (index: number, obj: IDialogMessage): string => {
    return obj.id;
  };
}
