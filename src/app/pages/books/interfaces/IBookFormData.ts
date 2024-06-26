import { IBookFormSelectOptions } from '@pages/books/interfaces/IBookFormSelectOptions';
import { EProductLabels } from '@shared/interfaces/EProductLabels';

export interface IBookFormData {
  title?: string | null;
  type?: IBookFormSelectOptions[] | EProductLabels | null;
  description?: string | null;
  photo?: File | null;
  authors?: string | string[] | null;
  categories?: string | string[] | null;
  message?: string | null;
  isbn?: number | null;
  geoId?: number | null;
  position?: string;
}
