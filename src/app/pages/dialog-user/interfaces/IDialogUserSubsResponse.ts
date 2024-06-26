import { IBaseResponse } from '@shared/interfaces/IBaseResponse';

export interface IDialogUserSubsResponse extends IBaseResponse {
  data: {
    type: string;
    attributes: {
      subscription: boolean;
    };
  };
}
