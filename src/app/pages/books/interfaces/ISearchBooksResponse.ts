import { IBaseResponse } from '@shared/interfaces/IBaseResponse';
import { ISearchBook } from '@pages/books/interfaces/ISearchBook';

export interface ISearchBooksResponse extends IBaseResponse {
  data: {
    attributes: {
      books: ISearchBook[];
    };
  };
}
