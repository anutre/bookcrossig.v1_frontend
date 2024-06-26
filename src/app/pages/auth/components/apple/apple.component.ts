import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-apple',
  templateUrl: './apple.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppleComponent {
  constructor() {}
}
