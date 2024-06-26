import { IPagination } from '@shared/interfaces/IPagination';
import { IBookAdded } from '@pages/profile/interfaces/IBookAdded';

export interface IProfileAddedBookResponse {
  data: {
    attributes: {
      books: IBookAdded[];
      pagination: IPagination;
    };
  };
}
