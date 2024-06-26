import { IRegisterFormData } from './IRegisterFormData';

export interface IRegisterPayload {
  data: {
    type: string;
    attributes: IRegisterFormData;
  };
}
