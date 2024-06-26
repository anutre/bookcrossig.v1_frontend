import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { interval, Observable, Subscription } from 'rxjs';
import { IMessengerItem } from '@pages/messages/interfaces/IMessengerItem';
import { MessagesUiActions, selectChatsList } from '@pages/messages/store';
import { selectIsChatLoading } from '@pages/chat/store';
import { IInputChangeData } from '@shared/interfaces/IInputChangeData';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MessagesComponent implements OnInit, OnDestroy {
  public chatList$: Observable<IMessengerItem[]>;

  public isLoading$: Observable<boolean>;

  private updateSubs: Subscription;

  private updateInterval = 5000;

  constructor(private store: Store) {}

  private initComponent() {
    this.store.dispatch(MessagesUiActions.messagesInit());
  }

  private initValues() {
    this.chatList$ = this.store.select(selectChatsList());
    this.isLoading$ = this.store.select(selectIsChatLoading);
    this.updateSubs = interval(this.updateInterval).subscribe(() => {
      this.updateChatsList();
    });
  }

  searchHandler(data: IInputChangeData) {
    this.chatList$ = this.store.select(selectChatsList(data.value));
  }

  updateChatsList() {
    this.store.dispatch(MessagesUiActions.fetchMessages());
  }

  trackByKey = (index: number, obj: IMessengerItem): string => {
    return obj.id;
  };

  ngOnInit() {
    this.initValues();
    this.initComponent();
  }

  ngOnDestroy() {
    this.updateSubs.unsubscribe();
  }
}
