import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AppUiActions } from '@store/app/index';
import { concatMap, tap } from 'rxjs';
import { AuthUIActions } from '@store/auth';

import { TermsModalComponent } from '@shared/modules/terms-modal/components/terms-modal/terms-modal.component';
import { IntroModalComponent } from '@shared/modules/intro-modal/components/intro-modal/intro-modal.component';
import { MatDialog } from '@angular/material/dialog';
import { Capacitor } from '@capacitor/core';
import { GeoService } from '@shared/services/geo.service';

@Injectable()
export class AppEffects {
  constructor(
    private actions$: Actions,
    private dialog: MatDialog,
    private geoService: GeoService,
  ) {}

  appInit$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AppUiActions.appInit),
      concatMap(() => {
        return [
          AuthUIActions.authInit(),
          AppUiActions.checkTermsAgreement(),
          AppUiActions.checkWelcomeAgreement(),
        ];
      }),
    );
  });

  checkTermsAgreement$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(AppUiActions.checkTermsAgreement),
        tap(() => {
          this.proceedTermsModal();
        }),
      );
    },
    { dispatch: false },
  );

  checkIntroAgreement$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(AppUiActions.checkWelcomeAgreement),
        tap(() => {
          this.proceedIntroModal();
        }),
      );
    },
    { dispatch: false },
  );

  private proceedTermsModal() {
    const isTermsAccepted = localStorage.getItem('terms_accept');
    const isTermsPage =
      location.href.includes('terms-and-conditions') || location.href.includes('privacy-policy');

    //показывается только в аппке
    const isMobile = Capacitor.isNativePlatform();

    if (isMobile && !isTermsAccepted && !isTermsPage) {
      this.dialog
        .open(TermsModalComponent)
        .afterClosed()
        .subscribe((result) => {
          if (result) {
            localStorage.setItem('terms_accept', 'accepted');
            this.proceedIntroModal();
          }
        });
    }
  }

  private proceedIntroModal() {
    const isTermsAccepted = localStorage.getItem('terms_accept') ?? true;
    const isTermsPage =
      location.href.includes('terms-and-conditions') || location.href.includes('privacy-policy');
    const isMobile = Capacitor.isNativePlatform();

    if (isMobile && isTermsAccepted && !isTermsPage) {
      this.dialog
        .open(IntroModalComponent)
        .afterOpened()
        .subscribe((_) => {
          this.geoService.checkpermissions().subscribe((status) => {
            if (status.location === 'granted') {
              setTimeout(() => {
                this.dialog.closeAll();
              }, 700);
            } else {
              this.geoService.requestPermissions();
              setTimeout(() => {
                this.dialog.closeAll();
              }, 2000);
            }
          });
        });
    }
  }
}
