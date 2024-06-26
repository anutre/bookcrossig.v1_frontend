import { IBaseResponse } from '@shared/interfaces/IBaseResponse';
import { IDialogMessage } from '@pages/chat/interfaces/IDialogMessage';
import { IChatUser } from '@shared/interfaces/IChatUser';

export interface IDialogResponse extends IBaseResponse {
  data: {
    attributes: {
      chat: IDialogMessage[];
      user_receive: IChatUser;
      user_sender: IChatUser;
    };
  };
}
