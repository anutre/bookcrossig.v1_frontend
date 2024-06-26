import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IGroupedLink } from '@shared/interfaces/IGroupedLink';

@Component({
  selector: 'app-link-group',
  templateUrl: './link-group.component.html',
  styleUrls: ['./link-group.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LinkGroupComponent {
  @Input() links: IGroupedLink[] = [];

  constructor() {}
}
