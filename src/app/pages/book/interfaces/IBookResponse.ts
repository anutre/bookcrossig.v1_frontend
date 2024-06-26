import { IBaseResponse } from '@shared/interfaces/IBaseResponse';
import { ILocalBook } from '@pages/book/interfaces/ILocalBook';
import { ILocalBookUser } from '@pages/book/interfaces/ILocalBookUser';
import { IBookRecommendation } from '@pages/book/interfaces/IBookRecommendation';
import { IBookOther } from '@pages/book/interfaces/IBookOther';

export interface IBookResponse extends IBaseResponse {
  data: {
    attributes: {
      book: ILocalBook;
      user: ILocalBookUser;
      recommendation: IBookRecommendation[];
      other: IBookOther[];
      message: string;
      city: string;
      type: number;
    };
    id: string;
  };
}
