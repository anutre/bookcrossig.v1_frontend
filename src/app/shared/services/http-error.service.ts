import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

import * as HttpErrorActions from '@store/http-error/http-error.actions';

@Injectable({
  providedIn: 'root',
})
export class HttpErrorService {
  constructor() {}

  handleError(errRes: HttpErrorResponse) {
    let errorMessage = '';
    if (errRes.error) {
      if (
        typeof errRes.error === 'object' &&
        !Array.isArray(errRes.error) &&
        errRes.error !== null
      ) {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        for (const [_key, val] of Object.entries(errRes.error as { key: string; val: string[] })) {
          errorMessage += val[0].replace('data.attributes.', '') + '</br>';
        }
      } else {
        errorMessage += errRes.error;
      }
    }

    // const errorMessage = errRes.message || errRes.error.message || 'Unknown error occurred';
    const errorStatus = errRes.status;

    return HttpErrorActions.handleHttpError({
      error: { status: errorStatus, message: errorMessage },
    });
  }
}
