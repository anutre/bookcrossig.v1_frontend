import { Injectable } from '@angular/core';

@Injectable()
export class FormDataSerializerService {
  constructor() {}

  fillFormData(data: { [key: string]: any }): FormData {
    const formData: FormData = new FormData();

    for (const [key, val] of Object.entries(data)) {
      if (Array.isArray(val)) {
        val.forEach((item) => {
          formData.append(`${key}[]`, item);
        });
      } else {
        formData.append(key, val);
      }
    }

    return formData;
  }
}
