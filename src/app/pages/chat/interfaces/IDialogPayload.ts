import { IDialogFormData } from '@pages/chat/interfaces/IDialogFormData';

export interface IDialogPayload {
  data: {
    type: string;
    attributes: IDialogFormData;
  };
}
