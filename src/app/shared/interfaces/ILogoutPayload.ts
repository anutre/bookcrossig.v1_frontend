import { IAuthTokens } from '@shared/interfaces/IAuthTokens';

export interface ILogoutPayload {
  data: {
    type: string;
    attributes: IAuthTokens;
  };
}
