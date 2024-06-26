import { IBaseResponse } from '@shared/interfaces/IBaseResponse';

export interface IBookRequestResponse extends IBaseResponse {
  data: {
    attributes: {
      status: boolean;
    };
  };
}
