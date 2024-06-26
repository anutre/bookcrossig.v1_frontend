import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  OnDestroy,
  OnInit,
  PLATFORM_ID,
} from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import {
  BookUiActions,
  selectBook,
  selectBookId,
  selectBookLocation,
  selectBookMessage,
  selectBookOther,
  selectBookRecommendation,
  selectBookStatus,
  selectBookType,
  selectBookUser,
} from '@pages/book/store';
import { ILocalBook } from '@pages/book/interfaces/ILocalBook';
import { ILocalBookUser } from '@pages/book/interfaces/ILocalBookUser';
import { InitDetail } from 'lightgallery/lg-events';
import { LightGallery } from 'lightgallery/lightgallery';
import { isPlatformBrowser } from '@angular/common';
import { IBookRecommendation } from '@pages/book/interfaces/IBookRecommendation';
import { IBookOther } from '@pages/book/interfaces/IBookOther';
import { ActivatedRoute } from '@angular/router';
import { IUser } from '@shared/interfaces/IUser';
import { selectUser } from '@store/user';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookComponent implements OnInit, OnDestroy {
  book$: Observable<ILocalBook | null>;

  bookUser$: Observable<ILocalBookUser | null>;

  recommendation$: Observable<IBookRecommendation[]>;

  other$: Observable<IBookOther[]>;

  message$: Observable<string | null>;

  city$: Observable<string | null>;

  type$: Observable<number | null>;

  status$: Observable<boolean | null>;

  urlId$: Observable<string | null>;

  isBrowser = isPlatformBrowser(this.platformId);

  public mainUser$: Observable<IUser | null>;

  private navigationSubscription: Subscription;

  private lightGallery: LightGallery;

  constructor(
    private store: Store,
    @Inject(PLATFORM_ID) private platformId: Object,
    private route: ActivatedRoute,
    private meta: Meta,
    private title: Title,
  ) {
    this.store.select(selectBook).subscribe((book) => {
      this.title.setTitle(<string>book?.title);
    });
  }

  ngOnInit() {
    this.navigationSubscription = this.route.params.subscribe(() => {
      this.initComponent();
    });
    this.initValues();
  }

  onInit = (detail: InitDetail): void => {
    if (isPlatformBrowser(this.platformId)) {
      this.lightGallery = detail.instance;

      setTimeout(() => {
        this.lightGallery.refresh();
      }, 500);
    }
  };

  statusClickHandler() {
    this.store.dispatch(BookUiActions.requestBook());
  }

  private initComponent(): void {
    this.store.dispatch(BookUiActions.bookInit());
  }

  private initValues(): void {
    this.book$ = this.store.select(selectBook);
    this.bookUser$ = this.store.select(selectBookUser);
    this.recommendation$ = this.store.select(selectBookRecommendation);
    this.other$ = this.store.select(selectBookOther);
    this.message$ = this.store.select(selectBookMessage);
    this.city$ = this.store.select(selectBookLocation);
    this.type$ = this.store.select(selectBookType);
    this.status$ = this.store.select(selectBookStatus);
    this.mainUser$ = this.store.select(selectUser);
    this.urlId$ = this.store.select(selectBookId);
  }

  isNotEqualMainUser(mainUser: IUser | null, currentUser: ILocalBookUser | null): boolean {
    return mainUser?.nickname !== currentUser?.nickname;
  }

  ngOnDestroy() {
    this.navigationSubscription.unsubscribe();
  }
}
