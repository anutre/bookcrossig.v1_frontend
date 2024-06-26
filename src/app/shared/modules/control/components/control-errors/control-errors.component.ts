import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-control-errors',
  templateUrl: './control-errors.component.html',
  styleUrls: ['./control-errors.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ControlErrorsComponent {
  @Input() errList: string[] | undefined;

  constructor() {}
}
