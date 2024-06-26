import { IBookFormSelectOptions } from '@pages/books/interfaces/IBookFormSelectOptions';
import { EProductLabels } from '@shared/interfaces/EProductLabels';
import { IBookFormStatusSelectOptions } from '@pages/book/interfaces/IBookFormStatusSelectOptions';
import { EProductStatuses } from '@shared/interfaces/EProductStatuses';

export interface IBookEditFormData {
  title?: string | null;
  type?: IBookFormSelectOptions[] | EProductLabels | null;
  status?: IBookFormStatusSelectOptions[] | EProductStatuses | null;
  description?: string | null;
  photo?: File | null;
  authors?: string | string[] | null;
  categories?: string | string[] | null;
  message?: string | null;
  isbn?: number | null;
  geoId?: number | null;
  position?: string;
}
