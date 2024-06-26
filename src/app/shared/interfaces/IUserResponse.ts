import { IBaseResponse } from '@shared/interfaces/IBaseResponse';
import { IUser } from '@shared/interfaces/IUser';
import { IUserVerification } from '@shared/interfaces/IUserVerification';

export interface IUserResponse extends IBaseResponse {
  data: {
    type: string;
    attributes: {
      user: IUser;
      verification: IUserVerification;
    };
  };
}
