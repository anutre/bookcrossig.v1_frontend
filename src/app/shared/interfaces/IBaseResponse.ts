import { IJSONApiResponse } from '@shared/interfaces/IJSONApiResponse';
import { IMetaResponse } from '@shared/interfaces/IMetaResponse';

export interface IBaseResponse {
  meta: IMetaResponse;
  jsonapi: IJSONApiResponse;
}
