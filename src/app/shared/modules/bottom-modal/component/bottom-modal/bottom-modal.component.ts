import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-bottom-modal',
  templateUrl: './bottom-modal.component.html',
  styleUrls: ['./bottom-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BottomModalComponent {}
