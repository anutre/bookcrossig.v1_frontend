import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { ApiPathConfig } from '@config/api.config';
import { ApiService } from '@shared/services/api.service';
import { IBookResponse } from '@pages/book/interfaces/IBookResponse';
import { IBookViewResponse } from '@pages/book/interfaces/IBookViewResponse';
import { IBookRequestResponse } from '@pages/book/interfaces/IBookRequestResponse';
import { IBookStatusResponse } from '@pages/book/interfaces/IBookStatusResponse';

@Injectable()
export class BookService {
  constructor(private apiService: ApiService) {}

  fetchBook(id: string): Observable<IBookResponse> {
    let url = `${environment.apiUrl + ApiPathConfig.book}/${id}`;

    return this.apiService.get<IBookResponse>(url);
  }

  fetchBookStatus(id: string): Observable<IBookStatusResponse> {
    let url = `${environment.apiUrl + ApiPathConfig.bookRequest}/${id}`;

    return this.apiService.get<IBookStatusResponse>(url);
  }

  viewBook(id: string): Observable<IBookViewResponse> {
    let url = `${environment.apiUrl + ApiPathConfig.bookView}/${id}`;

    return this.apiService.get<IBookViewResponse>(url);
  }

  requestBook(id: string): Observable<IBookRequestResponse> {
    let url = `${environment.apiUrl + ApiPathConfig.bookRequest}/${id}`;

    return this.apiService.post<IBookRequestResponse>(url, { id });
  }

  updateBook(bookFormData: FormData, isbn?: string): Observable<any> {
    let url = `${environment.apiUrl + ApiPathConfig.bookUpdate}`;

    if (isbn) {
      url += `/${isbn}`;
    }

    return this.apiService.post<any>(url, bookFormData);
  }
}
