import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { selectThemeMode, UIActions } from '@store/ui';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { Observable, Subscription } from 'rxjs';
import { EThemeToggleIcon } from '@shared/modules/theme-toggle/constant/EThemeToggleIcon';
import { EThemeMode } from '@shared/interfaces/EThemeMode';

@Component({
  selector: 'app-theme-toggle',
  templateUrl: './theme-toggle.component.html',
  styleUrls: ['./theme-toggle.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ThemeToggleComponent implements OnInit, AfterViewInit, OnDestroy {
  readonly EThemeMode = EThemeMode;

  @ViewChild('themeModeSwitch', { read: ElementRef }) toggleEl: ElementRef | undefined;

  themeSubscription: Subscription;

  theme$: Observable<string>;

  constructor(private store: Store, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.initComponent();
    this.initValues();
  }

  private initComponent() {
    this.store.dispatch(UIActions.initTheme());
  }

  private initValues() {
    this.theme$ = this.store.select(selectThemeMode);
    this.themeSubscription = this.theme$.subscribe((mode) => this.bodyCLassHandler(mode));
  }

  ngAfterViewInit() {
    this.toggleIconHandler();
  }

  toggleThemeMode(event: MatSlideToggleChange) {
    const mode = event.checked ? EThemeMode.DARK : EThemeMode.LIGHT;
    this.bodyCLassHandler(mode);
    this.store.dispatch(UIActions.toggleThemeMode({ themeMode: mode }));
  }

  private bodyCLassHandler(className: string) {
    const bodyEl = document.body;
    if (bodyEl) {
      this.renderer.removeClass(bodyEl, EThemeMode.LIGHT);
      this.renderer.removeClass(bodyEl, EThemeMode.DARK);
      this.renderer.addClass(bodyEl, className);
    }
  }

  toggleIconHandler() {
    if (this.toggleEl) {
      this.toggleEl.nativeElement
        .querySelector('.mdc-switch__icon--on')
        .firstChild.setAttribute('d', EThemeToggleIcon.MOON);
      this.toggleEl.nativeElement
        .querySelector('.mdc-switch__icon--off')
        .firstChild.setAttribute('d', EThemeToggleIcon.SUN);
    }
  }

  ngOnDestroy() {
    this.themeSubscription.unsubscribe();
  }
}
