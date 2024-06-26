import { IBaseResponse } from '@shared/interfaces/IBaseResponse';

export interface IBookStatusResponse extends IBaseResponse {
  data: {
    attributes: {
      status: boolean;
    };
  };
}
