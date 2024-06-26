import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Observable, of, Subscription, tap } from 'rxjs';
import { IPersonalDetailFormField } from '@pages/profile/interfaces/IPersonalDetailsFormField';
import { PersonalDetailFields } from '@pages/profile/components/personal-details/personal-detail.constant';
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { ProfileUiActions, selectPersonalDetails } from '@pages/profile/store';
import { MatDialog } from '@angular/material/dialog';
import { DeleteAccountModalComponent } from '@shared/modules/delete-account/component/delete-account-modal/delete-account-modal.component';

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PersonalDetailsComponent implements OnInit, OnDestroy {
  detailFieldList$: Observable<IPersonalDetailFormField[]> = of(PersonalDetailFields);

  personalDetailsSub: Subscription;

  public form: any = {};

  public formGroup: FormGroup;

  constructor(private store: Store, private cdr: ChangeDetectorRef, private dialog: MatDialog) {}

  ngOnInit() {
    this.initComponent();
    this.initValues();
  }

  private initValues() {
    this.initializeForm();
    this.personalDetailsSub = this.store
      .select(selectPersonalDetails)
      .pipe(
        tap((data) => {
          this.formGroup.patchValue({
            name: data?.name,
            nickname: data?.nickname,
          });

          this.cdr.detectChanges();
        }),
      )
      .subscribe();
  }

  private initializeForm() {
    PersonalDetailFields.forEach((item) => {
      this.form[item.id] = new FormControl<string>('', item.validator);
    });
    this.formGroup = new FormGroup(this.form);
  }

  private initComponent() {
    this.store.dispatch(ProfileUiActions.fetchPersonalDetails());
  }

  updatePersonalDetail(ctrlName: string) {
    const ctrl = this.formGroup.get(ctrlName);
    ctrl?.markAsTouched();

    if (ctrl?.invalid) return;

    const payload = {
      data: {
        type: 'UserEditRequest',
        attributes: {
          [ctrlName]: ctrl?.value,
        },
      },
    };

    this.store.dispatch(ProfileUiActions.updatePersonalDetails({ payload }));
  }

  deleteAccountHandler() {
    this.proceedDeleteAccountConfirmation();
  }

  private proceedDeleteAccountConfirmation() {
    this.dialog.open(DeleteAccountModalComponent, {
      panelClass: 'cdk-overlay-pane--swiper-modal',
    });
  }

  ngOnDestroy() {
    this.personalDetailsSub.unsubscribe();
  }
}
