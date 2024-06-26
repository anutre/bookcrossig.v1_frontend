import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { ApiPathConfig } from '@config/api.config';
import { ApiService } from '@shared/services/api.service';
import { ISearchBooksResponse } from '@pages/books/interfaces/ISearchBooksResponse';
import { ISearchBooksByIsbnResponse } from '@pages/books/interfaces/ISearchBooksByIsbnResponse';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  constructor(private apiService: ApiService) {}

  searchBooks(query: string): Observable<ISearchBooksResponse> {
    let url = `${environment.apiUrl + ApiPathConfig.booksSearch}`;

    if (query) {
      url += `?query=${query}`;
    }

    return this.apiService.get<ISearchBooksResponse>(url);
  }

  createBook(bookFormData: FormData, isbn?: string): Observable<any> {
    let url = `${environment.apiUrl + ApiPathConfig.book}`;

    if (isbn) {
      url += `/${isbn}`;
    }

    return this.apiService.post<any>(url, bookFormData);
  }

  fetchBook(isbn: string): Observable<ISearchBooksByIsbnResponse> {
    let url = `${environment.apiUrl + ApiPathConfig.booksSearch}/${isbn}`;

    return this.apiService.get<ISearchBooksByIsbnResponse>(url);
  }
}
