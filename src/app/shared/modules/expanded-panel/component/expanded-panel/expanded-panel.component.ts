import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-expanded-panel',
  templateUrl: './expanded-panel.component.html',
  styleUrls: ['./expanded-panel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExpandedPanelComponent {
  @Input() panelOpenState = false;
}
