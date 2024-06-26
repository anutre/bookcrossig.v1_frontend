import { IPersonalDetailsData } from '@pages/profile/interfaces/IPersonalDetailsData';

export interface IPayloadUpdatePersonalDetails {
  data: {
    type: string;
    attributes: Partial<IPersonalDetailsData>;
  };
}
