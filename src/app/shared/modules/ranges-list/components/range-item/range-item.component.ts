import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { GeoUiActions } from '@store/geo';

@Component({
  selector: 'app-range-item',
  templateUrl: './range-item.component.html',
  styleUrls: ['./range-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RangeItemComponent {
  @Input() range: number;

  @Input() selectedRange: number | null;

  constructor(private store: Store) {}

  toggleRangeFilter() {
    if (this.range === this.selectedRange) {
      this.store.dispatch(GeoUiActions.clearRangePositionFilter());
    } else {
      this.store.dispatch(GeoUiActions.getGeolocation({ range: this.range }));
    }
  }
}
