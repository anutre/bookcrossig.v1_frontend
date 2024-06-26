import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-intro-modal',
  templateUrl: './intro-modal.component.html',
  styleUrls: ['./intro-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IntroModalComponent {
  constructor() {}
}
