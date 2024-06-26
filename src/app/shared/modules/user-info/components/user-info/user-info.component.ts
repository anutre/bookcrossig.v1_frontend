import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserInfoComponent {
  @Input() photo: string | null | undefined;

  @Input() name: string | null | undefined;

  @Input() nickname: string | null | undefined;

  constructor() {}

  protected readonly screen = screen;
}
