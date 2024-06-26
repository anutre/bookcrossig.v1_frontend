import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-terms-modal',
  templateUrl: './terms-modal.component.html',
  styleUrls: ['./terms-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TermsModalComponent {
  constructor() {}
}
