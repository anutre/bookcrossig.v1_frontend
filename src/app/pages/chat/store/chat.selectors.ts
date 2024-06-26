import { createFeatureSelector, createSelector } from '@ngrx/store';
import { chatFeatureKey, IChatState } from '@pages/chat/store/chat.reducer';

const selectChatState = createFeatureSelector<IChatState>(chatFeatureKey);

export const selectIsChatLoading = createSelector(
  selectChatState,
  (state: IChatState) => state.loading,
);

export const selectDialogMessages = createSelector(
  selectChatState,
  (state: IChatState) => state.chat,
);

export const selectSenderUser = createSelector(
  selectChatState,
  (state: IChatState) => state.userSender,
);

export const selectReceiveUser = createSelector(
  selectChatState,
  (state: IChatState) => state.userReceive,
);
