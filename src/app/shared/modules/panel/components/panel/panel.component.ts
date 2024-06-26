import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectIsMessageAvailable } from '@store/meta';
import { PANEL_LINKS } from '@shared/modules/panel/components/panel.constant';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PanelComponent implements OnInit {
  public links$: Observable<{ icon: string; url: string }[]> = of(PANEL_LINKS);

  public isNewMessageAvailable$: Observable<boolean | undefined>;

  constructor(private store: Store) {}

  ngOnInit() {
    this.initValues();
  }

  private initValues() {
    this.isNewMessageAvailable$ = this.store.select(selectIsMessageAvailable);
  }

  trackByFn(index: number) {
    return index;
  }

  isActiveMarkerState(state: boolean, url: string): boolean {
    return state && url.includes('messages');
  }
}
