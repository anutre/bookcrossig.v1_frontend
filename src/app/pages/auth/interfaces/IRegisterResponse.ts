import { IBaseResponse } from '@shared/interfaces/IBaseResponse';
import { IAuthTokens } from '@shared/interfaces/IAuthTokens';

export interface IRegisterResponse extends IBaseResponse {
  data: {
    type: string;
    attributes: {
      id: string;
      type: string;
      tokens: IAuthTokens;
    };
  };
}
