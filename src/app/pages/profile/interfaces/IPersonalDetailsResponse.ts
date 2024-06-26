import { IBaseResponse } from '@shared/interfaces/IBaseResponse';
import { IPersonalDetailsData } from '@pages/profile/interfaces/IPersonalDetailsData';

export interface IPersonalDetailsResponse extends IBaseResponse {
  data: {
    attributes: {
      user: IPersonalDetailsData;
      id: string;
      type: string;
    };
  };
}
