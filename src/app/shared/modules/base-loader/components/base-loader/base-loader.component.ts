import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectIsGlobalLoadingActive } from '@shared/store/ui';

@Component({
  selector: 'app-base-loader',
  templateUrl: './base-loader.component.html',
  styleUrls: ['./base-loader.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BaseLoaderComponent implements OnInit {
  public isLoading: Observable<boolean>;

  constructor(private store: Store) {}

  ngOnInit() {
    this.isLoading = this.store.select(selectIsGlobalLoadingActive);
  }
}
