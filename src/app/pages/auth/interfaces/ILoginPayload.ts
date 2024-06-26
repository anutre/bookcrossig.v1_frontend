import { ILoginFormData } from './ILoginFormData';

export interface ILoginPayload {
  data: {
    type: string;
    attributes: ILoginFormData;
  };
}
