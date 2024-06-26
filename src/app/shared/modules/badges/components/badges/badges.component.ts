import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { EProductLabels } from '@shared/interfaces/EProductLabels';
import { EBookActions } from '@shared/constants/book.constant';

@Component({
  selector: 'app-badges',
  templateUrl: './badges.component.html',
  styleUrls: ['./badges.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BadgesComponent {
  @Input() status: number | null;

  protected readonly EProductLabels = EProductLabels;

  protected readonly EBookActions = EBookActions;
}
