import { IBook } from '@shared/interfaces/IBook';

export interface IBookAdded extends IBook {
  status: number;
}
