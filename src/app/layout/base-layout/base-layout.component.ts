import { ChangeDetectionStrategy, Component, Inject, PLATFORM_ID } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BaseLayoutComponent {
  constructor(@Inject(PLATFORM_ID) private platformId: Object, private store: Store) {}
}
