import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { filter, map, Observable, of, Subscription } from 'rxjs';
import { IBookFormSelectOptions } from '@pages/books/interfaces/IBookFormSelectOptions';
import {
  BOOK_FORM_ACTIONS_SELECT_OPTIONS,
  BOOK_FORM_STATE_SELECT_OPTIONS,
} from '@shared/constants/book.constant';
import { Store } from '@ngrx/store';
import { FormDataSerializerService } from '@shared/services/form-data-serializer.service';
import { selectCityByGeo, selectCurrentPosition } from '@store/geo';
import { BookUiActions, IBookState, selectBookData, selectIsBookLoading } from '@pages/book/store';
import { Position } from '@capacitor/geolocation';
import { IBookFormStatusSelectOptions } from '@pages/book/interfaces/IBookFormStatusSelectOptions';
import { IBookEditForm } from '@pages/book/interfaces/IBookEditForm';
import { IBookEditFormData } from '@pages/book/interfaces/IBookEditFormData';

@Component({
  selector: 'app-book-edit-form',
  templateUrl: './book-edit-form.component.html',
  styleUrls: ['./book-edit-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookEditFormComponent implements OnInit, OnDestroy {
  public form: FormGroup<IBookEditForm>;

  public bookActionList: IBookFormSelectOptions[] = BOOK_FORM_ACTIONS_SELECT_OPTIONS;

  public bookStatusList: IBookFormStatusSelectOptions[] = BOOK_FORM_STATE_SELECT_OPTIONS;

  public cityList$: Observable<IBookFormSelectOptions[]>;

  bookLoading$: Observable<boolean> = of(true);

  public bookPhoto: string;

  private currentPosition: Position;

  private bookInfoSubs: Subscription;

  private geoLocationSubs: Subscription;

  constructor(
    private fb: FormBuilder,
    private store: Store,
    private formDataSerializer: FormDataSerializerService,
    private cdr: ChangeDetectorRef,
  ) {}

  ngOnInit() {
    this.initComponent();
    this.initValues();
  }

  private initComponent() {
    this.store.dispatch(BookUiActions.bookInit());
  }

  private initValues() {
    this.initForm();

    this.bookLoading$ = this.store.select(selectIsBookLoading);

    this.cityList$ = this.store.select(selectCityByGeo).pipe(
      filter(Boolean),
      map((data) => {
        return data?.reduce((cityOptions, city) => {
          return [...cityOptions, { id: city.id, text: city.city_ascii }];
        }, [] as IBookFormSelectOptions[]);
      }),
    );

    this.geoLocationSubs = this.store.select(selectCurrentPosition).subscribe(({ position }) => {
      this.currentPosition = position;
    });

    this.bookInfoSubs = this.store.select(selectBookData).subscribe((data: IBookState | null) => {
      this.bookPhoto = data?.book?.photo ?? '';

      this.form.patchValue({
        title: data?.book?.title,
        status: data?.status ? 1 : 0,
        description: data?.book?.description,
        authors: data?.book?.authors,
        categories: data?.book?.categories,
        type: data?.type,
        message: data?.message,
      });
      this.form.updateValueAndValidity();
      this.cdr.detectChanges();
    });
  }

  private initForm() {
    this.form = this.fb.group({
      type: this.fb.control<number | null>(null, [Validators.required]),
      status: this.fb.control<number | null>(null, [Validators.required]),
      title: this.fb.control<string>({ value: '', disabled: true }, [Validators.required]),
      description: this.fb.control<string>('', [Validators.required]),
      photo: this.fb.control<File | null>(null),
      authors: this.fb.control<string[]>([], [Validators.required]),
      categories: this.fb.control<string[]>([], [Validators.required]),
      geoId: this.fb.control<number | null>(null, [Validators.required]),
      message: this.fb.control<string>('', [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(10000),
      ]),
    });
  }

  submitHandler(): void {
    this.form.markAllAsTouched();

    if (this.form.invalid) return;

    const bookFormData: IBookEditFormData = {
      ...this.form.getRawValue(),
    };

    if (this.currentPosition) {
      bookFormData.position = JSON.stringify(this.currentPosition);
    }

    const formData: FormData = this.formDataSerializer.fillFormData(bookFormData);

    this.store.dispatch(BookUiActions.updateBook({ payload: formData }));
  }

  ngOnDestroy() {
    this.bookInfoSubs.unsubscribe();
    this.geoLocationSubs.unsubscribe();
  }
}
