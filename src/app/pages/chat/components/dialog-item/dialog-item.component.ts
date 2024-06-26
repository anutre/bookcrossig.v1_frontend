import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { IDialogMessage } from '@pages/chat/interfaces/IDialogMessage';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IChatUser } from '@shared/interfaces/IChatUser';
import { selectSenderUser } from '@pages/chat/store';

@Component({
  selector: 'app-dialog-item',
  templateUrl: './dialog-item.component.html',
  styleUrls: ['./dialog-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogItemComponent implements OnInit {
  @Input()
  set message(val: IDialogMessage) {
    this._message = { ...val };

    this.isLinkMessage = val.text.includes('://');
  }

  public _message: IDialogMessage;

  public isLinkMessage: boolean = false;

  public senderUser$: Observable<IChatUser | null>;

  constructor(private store: Store) {}

  ngOnInit() {
    this.initValues();
  }

  private initValues() {
    this.senderUser$ = this.store.select(selectSenderUser);
  }
}
