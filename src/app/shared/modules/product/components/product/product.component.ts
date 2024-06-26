import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from '@shared/interfaces/IUser';
import { Store } from '@ngrx/store';
import { selectUser } from '@store/user';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductComponent implements OnInit {
  @Input() hiddenActions: boolean;

  @Input() title: string = '';

  @Input() bookId: string | number | null = '';

  @Input() author: string[] = [];

  @Input() categories: string[] = [];

  @Input() photo: string;

  @Input() nickname: string | null;

  @Input() userId: string | undefined | null;

  @Input() status: number;

  @Input() publicationTime: number | undefined;

  @Input() link: string | null = null;

  @Input() hiddenStatus: number | undefined;

  @Input() isEditAction: boolean = false;

  existUser$: Observable<IUser | null>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.initValues();
  }

  private initValues(): void {
    this.existUser$ = this.store.select(selectUser);
  }

  isExistUser(
    existUserId: string | null | undefined,
    currentUserId: string | null | undefined,
  ): boolean {
    return existUserId === currentUserId;
  }
}
