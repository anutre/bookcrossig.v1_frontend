import { IBaseResponse } from '@shared/interfaces/IBaseResponse';

export interface IMetaCounter extends IBaseResponse {
  data: {
    type: string;
    id: string;
    attributes: {
      new_messages: boolean;
    };
  };
}
