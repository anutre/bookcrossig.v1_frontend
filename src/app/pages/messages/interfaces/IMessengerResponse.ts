import { IBaseResponse } from '@shared/interfaces/IBaseResponse';
import { IMessengerItem } from '@pages/messages/interfaces/IMessengerItem';

export interface IMessengerResponse extends IBaseResponse {
  data: {
    type: string;
    attributes: {
      chats: IMessengerItem[];
    };
  };
}
