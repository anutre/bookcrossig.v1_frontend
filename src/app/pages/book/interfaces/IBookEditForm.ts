import { FormControl } from '@angular/forms';

export interface IBookEditForm {
  type: FormControl<number | null>;
  status: FormControl<number | null>;
  title: FormControl<string | null>;
  description: FormControl<string | null>;
  photo: FormControl<File | null>;
  authors: FormControl<string[] | null>;
  categories: FormControl<string[] | null>;
  message: FormControl<string | null>;
  geoId: FormControl<number | null>;
}
