import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  OnDestroy,
  OnInit,
  PLATFORM_ID,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { isPlatformBrowser } from '@angular/common';
import { AppUiActions } from '@store/app';
import { SafeArea } from 'capacitor-plugin-safe-area';
import { NavigationEnd, Router } from '@angular/router';
import { BehaviorSubject, filter, map, Subscription } from 'rxjs';
import { MetaUiActions } from '@store/meta';
import { GeoUiActions } from '@store/geo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit, OnDestroy {
  public title = 'book-crossing';

  public statusBarHeight: number;

  private navigationSubscription: Subscription;

  isMapPageSub = new BehaviorSubject(false);

  isMapPage$ = this.isMapPageSub.asObservable();

  constructor(
    private router: Router,
    private store: Store,
    @Inject(PLATFORM_ID) private platformId: Object,
  ) {}

  ngOnInit() {
    this.initComponent();
  }

  initComponent() {
    if (isPlatformBrowser(this.platformId)) {
      this.store.dispatch(AppUiActions.appInit());
      this.loadCurrentPosition();
    }

    SafeArea.getStatusBarHeight().then(({ statusBarHeight }) => {
      this.statusBarHeight = statusBarHeight;
    });

    this.navigationSubscription = this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        map((event) => event as NavigationEnd),
      )
      .subscribe((event) => {
        this.isMapPageSub.next(event.url.includes('/map'));
        if (!event.url.includes('/messages')) {
          this.initMessageWatcher();
        }
      });
  }

  private initMessageWatcher() {
    this.store.dispatch(MetaUiActions.fetchMetaCounter());
  }

  private loadCurrentPosition() {
    this.store.dispatch(GeoUiActions.geoInit());
    this.store.dispatch(GeoUiActions.getCityByGeo());
  }

  ngOnDestroy() {
    this.navigationSubscription.unsubscribe();
  }
}
