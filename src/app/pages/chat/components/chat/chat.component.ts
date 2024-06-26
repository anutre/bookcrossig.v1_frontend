import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ChatUiActions, selectDialogMessages, selectReceiveUser } from '@pages/chat/store';
import { ActivatedRoute } from '@angular/router';
import { interval, Observable, Subscription } from 'rxjs';
import { IDialogMessage } from '@pages/chat/interfaces/IDialogMessage';
import { IChatUser } from '@shared/interfaces/IChatUser';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChatComponent implements OnInit, OnDestroy {
  private updateSubs: Subscription;

  private receiveId: string;

  private updateInterval = 5000;

  public messages$: Observable<IDialogMessage[]>;

  public receiveUser$: Observable<IChatUser | null>;

  constructor(private store: Store, private route: ActivatedRoute) {}

  private initComponent() {
    this.store.dispatch(ChatUiActions.chatInit({ id: this.receiveId }));
  }

  private initValues() {
    this.receiveId = this.route.snapshot.params['id'];
    this.messages$ = this.store.select(selectDialogMessages);
    this.receiveUser$ = this.store.select(selectReceiveUser);
    this.updateSubs = interval(this.updateInterval).subscribe(() => {
      this.updateChat();
    });
  }

  private updateChat() {
    this.store.dispatch(ChatUiActions.fetchDialog({ id: this.receiveId }));
  }

  ngOnInit() {
    this.initValues();
    this.initComponent();
  }

  ngOnDestroy() {
    this.updateSubs.unsubscribe();
  }
}
