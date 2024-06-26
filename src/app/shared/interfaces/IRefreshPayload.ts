import { IAuthTokens } from '@shared/interfaces/IAuthTokens';

export interface IRefreshPayload {
  data: {
    type: string;
    attributes: IAuthTokens;
  };
}
