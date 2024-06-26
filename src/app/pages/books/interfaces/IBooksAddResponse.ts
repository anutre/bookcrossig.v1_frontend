import { IBaseResponse } from '@shared/interfaces/IBaseResponse';

export interface IBooksAddResponse extends IBaseResponse {
  data: {
    attributes: {
      books: {
        id: string;
      };
    };
  };
}
