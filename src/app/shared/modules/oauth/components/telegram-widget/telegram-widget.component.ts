import {
  AfterViewInit,
  Component,
  ElementRef,
  Inject,
  Input,
  PLATFORM_ID,
  ViewChild,
} from '@angular/core';
import { ITelegramAuthResponse } from '@shared/modules/oauth/interfaces/ITelegramAuthResponse';
import { Store } from '@ngrx/store';
import { AuthUIActions } from '@store/auth';
import { isPlatformBrowser } from '@angular/common';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'telegram-auth-widget',
  template: `
    <div #script [style.display]="'none'">
      <ng-content></ng-content>
    </div>
  `,
})
export class TelegramAuthWidgetComponent implements AfterViewInit {
  @ViewChild('script', { static: true }) script: ElementRef;

  @Input() botName: string;

  constructor(private store: Store, @Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      // @ts-ignore
      window.telegramCallback = (loginData: any) => this.telegramCallback(loginData);
    }
  }

  convertToScript() {
    const element = this.script.nativeElement;
    const script = document.createElement('script');
    script.src = 'https://telegram.org/js/telegram-widget.js?5';
    script.setAttribute('data-telegram-login', this.botName);
    script.setAttribute('data-size', 'large');
    script.setAttribute('data-userpic', 'false)');
    script.setAttribute('data-auth-url', 'https://api.bookcrossing.io/sso/register/telegram');
    script.setAttribute('data-onauth', 'telegramCallback(user)');
    script.setAttribute('data-request-access', 'write');
    element.parentElement.replaceChild(script, element);
  }

  private telegramCallback(telegramAuthResponse: ITelegramAuthResponse) {
    this.store.dispatch(AuthUIActions.loginWithTelegram({ loginData: telegramAuthResponse }));
  }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.convertToScript();
    }
  }
}
