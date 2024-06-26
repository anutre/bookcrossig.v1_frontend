import { IBaseResponse } from '@shared/interfaces/IBaseResponse';

export interface IBookUpdateResponse extends IBaseResponse {
  data: {
    attributes: {
      books: {
        id: string;
      };
    };
  };
}
