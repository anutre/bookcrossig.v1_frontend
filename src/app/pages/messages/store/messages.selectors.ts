import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IMessagesState, messagesFeatureKey } from '@pages/messages/store/messages.reducer';
import { IMessengerItem } from '@pages/messages/interfaces/IMessengerItem';

const selectMessagesState = createFeatureSelector<IMessagesState>(messagesFeatureKey);

export const selectIsMessagesLoading = createSelector(
  selectMessagesState,
  (state: IMessagesState) => state.loading,
);

export const selectChatsList = (filter: string = '') => {
  return createSelector(selectMessagesState, (state: IMessagesState) => {
    if (!filter) return state.chats;

    const formattedFilterString = filter.toLowerCase();

    return state.chats.filter(
      (chat: IMessengerItem) =>
        chat.user_receive.name.toLowerCase().includes(formattedFilterString) ||
        chat.text.toLowerCase().includes(formattedFilterString),
    );
  });
};
