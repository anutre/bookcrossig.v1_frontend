import { IBaseResponse } from '@shared/interfaces/IBaseResponse';
import { ISearchBookInfo } from '@pages/books/interfaces/ISearchBookInfo';

export interface ISearchBooksByIsbnResponse extends IBaseResponse {
  data: {
    attributes: {
      book: ISearchBookInfo;
    };
  };
}
