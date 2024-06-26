import { IBookFormSelectOptions } from '@pages/books/interfaces/IBookFormSelectOptions';
import { EProductLabels } from '@shared/interfaces/EProductLabels';
import { EProductStatuses } from '@shared/interfaces/EProductStatuses';
import { IBookFormStatusSelectOptions } from '@pages/book/interfaces/IBookFormStatusSelectOptions';

export enum EBookActions {
  PAYED = 'Продам',
  FREE = 'Отдам',
  SEARCH = 'Поиск',
  EXCHANGE = 'Обмен',
}

export const BOOK_FORM_ACTIONS_SELECT_OPTIONS: IBookFormSelectOptions[] = [
  { id: EProductLabels.Payed, text: EBookActions.PAYED },
  { id: EProductLabels.Free, text: EBookActions.FREE },
  { id: EProductLabels.Search, text: EBookActions.SEARCH },
  { id: EProductLabels.Exchange, text: EBookActions.EXCHANGE },
];

export enum EBookStates {
  PUBLISHED = 'Опубликовать',
  HIDE = 'Скрыть',
}

export const BOOK_FORM_STATE_SELECT_OPTIONS: IBookFormStatusSelectOptions[] = [
  { id: EProductStatuses.Published, text: EBookStates.PUBLISHED },
  { id: EProductStatuses.Hide, text: EBookStates.HIDE },
];
