import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IBookForm } from '@pages/books/interfaces/IBookForm';
import { IBookFormData } from '@pages/books/interfaces/IBookFormData';
import { IBookFormSelectOptions } from '@pages/books/interfaces/IBookFormSelectOptions';
import { Store } from '@ngrx/store';
import { BooksUiActions, selectBookInfo, selectIsBooksLoading } from '@pages/books/store';
import { FormDataSerializerService } from '@shared/services/form-data-serializer.service';
import { ActivatedRoute, Params } from '@angular/router';
import { filter, map, Observable, Subscription } from 'rxjs';
import { ISearchBookInfo } from '@pages/books/interfaces/ISearchBookInfo';
import { selectCityByGeo, selectCurrentPosition } from '@store/geo';
import { Position } from '@capacitor/geolocation';
import { BOOK_FORM_ACTIONS_SELECT_OPTIONS } from '@shared/constants/book.constant';

@Component({
  selector: 'app-books-form',
  templateUrl: './books-form.component.html',
  styleUrls: ['./books-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BooksFormComponent implements OnInit, OnDestroy {
  public form: FormGroup<IBookForm>;

  public bookPhoto: string;

  private currentPosition: Position;

  public loading$: Observable<boolean | null>;

  public bookActionList: IBookFormSelectOptions[] = BOOK_FORM_ACTIONS_SELECT_OPTIONS;

  public cityList$: Observable<IBookFormSelectOptions[]>;

  private isbn: string | null = null;

  private paramsSubs: Subscription;

  private bookInfoSubs: Subscription;

  private geoLocationSubs: Subscription;

  constructor(
    private fb: FormBuilder,
    private store: Store,
    private formDataSerializer: FormDataSerializerService,
    private route: ActivatedRoute,
    private cdr: ChangeDetectorRef,
  ) {}

  ngOnInit() {
    this.initValues();
    this.initComponent();
  }

  private initComponent() {}

  private initValues() {
    this.loading$ = this.store.select(selectIsBooksLoading);
    this.cityList$ = this.store.select(selectCityByGeo).pipe(
      filter(Boolean),
      map((data) => {
        return data?.reduce((cityOptions, city) => {
          return [...cityOptions, { id: city.id, text: city.city_ascii }];
        }, [] as IBookFormSelectOptions[]);
      }),
    );
    this.form = this.fb.group({
      type: this.fb.control<number | null>(null, [Validators.required]),
      title: this.fb.control<string>('', [Validators.required]),
      description: this.fb.control<string>('', this.isbn ? [] : [Validators.required]),
      photo: this.fb.control<File | null>(null, [Validators.required]),
      authors: this.fb.control<string[]>([]),
      categories: this.fb.control<string[]>([]),
      geoId: this.fb.control<number | null>(null),
      message: this.fb.control<string>('', [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(10000),
      ]),
    });

    this.paramsSubs = this.route.params.subscribe((params: Params) => {
      if (params['isbn']) {
        this.isbn = params['isbn'];
        this.store.dispatch(BooksUiActions.fetchBookInfo());
      }
    });

    this.geoLocationSubs = this.store.select(selectCurrentPosition).subscribe(({ position }) => {
      this.currentPosition = position;
      if (this.currentPosition) {
        this.form.get('geoId')?.setValidators(Validators.required);
        this.form.get('geoId')?.updateValueAndValidity();
      }
    });

    this.bookInfoSubs = this.store
      .select(selectBookInfo)
      .subscribe((data: ISearchBookInfo | null) => {
        if (!this.isbn || !data) return;

        this.bookPhoto = data.photo;

        this.form.patchValue({
          title: data.title,
          description: data.description,
          authors: data.author,
          categories: data.category,
        });

        this.form.controls.title.disable();
        this.form.controls.description.disable();
        this.form.controls.categories.disable();
        this.form.controls.authors.disable();

        this.form.get('photo')?.setValidators([]);
        this.form.get('photo')?.updateValueAndValidity();

        this.cdr.detectChanges();
      });
  }

  selectFileHandler(event: File) {
    this.form.controls.photo.setValue(event);
  }

  submitHandler(): void {
    this.form.markAllAsTouched();

    if (this.form.invalid) return;

    const bookFormData: IBookFormData = {
      ...this.form.value,
    };

    if (this.currentPosition) {
      bookFormData.position = JSON.stringify(this.currentPosition);
    }

    if (this.isbn) {
      bookFormData.isbn = +this.isbn;
    }

    const formData: FormData = this.formDataSerializer.fillFormData(bookFormData);

    this.store.dispatch(BooksUiActions.createBook({ payload: formData }));
  }

  ngOnDestroy() {
    this.paramsSubs.unsubscribe();
    this.bookInfoSubs.unsubscribe();
    this.geoLocationSubs.unsubscribe();
  }

  public uploadBookTitle(isLoading: boolean | null): string {
    return isLoading ? 'Загрузка...' : 'Добавить книгу';
  }
}
