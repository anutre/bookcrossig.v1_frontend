import { IBaseResponse } from '@shared/interfaces/IBaseResponse';
import { IBook } from '@shared/interfaces/IBook';
import { IDialogUser } from '@pages/dialog-user/interfaces/IDialogUser';

export interface IDialogUserResponse extends IBaseResponse {
  data: {
    type: string;
    attributes: {
      books: IBook[];
      user: IDialogUser;
      subscribe: boolean;
    };
  };
}
