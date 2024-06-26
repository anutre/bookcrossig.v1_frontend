import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-dialog-placeholder',
  templateUrl: './dialog-placeholder.component.html',
  styleUrls: ['./dialog-placeholder.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogPlaceholderComponent {
  constructor() {}
}
