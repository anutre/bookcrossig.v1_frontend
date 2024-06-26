import { FormControl } from '@angular/forms';

export interface IBookForm {
  type: FormControl<number | null>;
  title: FormControl<string | null>;
  description: FormControl<string | null>;
  photo: FormControl<File | null>;
  authors: FormControl<string[] | null>;
  categories: FormControl<string[] | null>;
  message: FormControl<string | null>;
  geoId: FormControl<number | null>;
}
