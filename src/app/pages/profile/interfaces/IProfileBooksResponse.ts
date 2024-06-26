import { IBaseResponse } from '@shared/interfaces/IBaseResponse';
import { IBook } from '@shared/interfaces/IBook';
import { IPagination } from '@shared/interfaces/IPagination';

export interface IProfileBooksResponse extends IBaseResponse {
  data: {
    attributes: {
      books: IBook[];
      pagination: IPagination;
    };
  };
}
