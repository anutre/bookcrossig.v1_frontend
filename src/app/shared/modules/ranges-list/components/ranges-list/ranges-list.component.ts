import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectGeoRange } from '@store/geo';

@Component({
  selector: 'app-ranges-list',
  templateUrl: './ranges-list.component.html',
  styleUrls: ['./ranges-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RangesListComponent implements OnInit {
  @Input() rangesList: any[] = [];

  selectedRange: Observable<number>;

  constructor(private store: Store) {}

  ngOnInit() {
    this.initValues();
  }

  private initValues() {
    this.selectedRange = this.store.select(selectGeoRange);
  }
}
