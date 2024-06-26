import { IBaseResponse } from '@shared/interfaces/IBaseResponse';
import { IAuthTokens } from '@shared/interfaces/IAuthTokens';

export interface ILoginResponse extends IBaseResponse {
  data: {
    type: string;
    id: string;
    attributes: {
      tokens: IAuthTokens;
    };
  };
}
