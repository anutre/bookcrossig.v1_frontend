import { IBaseResponse } from '@shared/interfaces/IBaseResponse';

export interface IBookViewResponse extends IBaseResponse {
  data: {
    attributes: {
      status: string;
    };
  };
}
