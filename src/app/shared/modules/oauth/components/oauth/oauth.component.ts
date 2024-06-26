import { ChangeDetectionStrategy, Component, Inject, PLATFORM_ID } from '@angular/core';
import { Capacitor } from '@capacitor/core';
import {
  SignInWithApple,
  SignInWithAppleOptions,
  SignInWithAppleResponse,
} from '@capacitor-community/apple-sign-in';
import { AuthUIActions } from '@store/auth';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-oauth',
  templateUrl: './oauth.component.html',
  styleUrls: ['./oauth.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OauthComponent {
  constructor(@Inject(PLATFORM_ID) private platformId: Object, private store: Store) {}

  protected readonly isMobile = Capacitor.isNativePlatform();

  public async initAppleOAuth() {
    let options: SignInWithAppleOptions = {
      clientId: 'AuthBookcrossingService',
      scopes: 'name email',
      redirectURI: 'https://bookcrossing.io/auth/apple',
      state: 'init',
      nonce: 'test',
    };

    SignInWithApple.authorize(options)
      .then((result: SignInWithAppleResponse) => {
        this.store.dispatch(
          AuthUIActions.loginWithApple({
            loginData: {
              id: result.response.identityToken,
              code: result.response.authorizationCode,
            },
          }),
        );
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
