import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HttpHeadersInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const isFormData: boolean = request.body instanceof FormData;

    if (isFormData) {
      return next.handle(request);
    }

    request = request.clone({
      setHeaders: {
        Accept: 'application/vnd.api+json',
        ['Content-type']: 'application/vnd.api+json',
      },
    });

    return next.handle(request);
  }
}
