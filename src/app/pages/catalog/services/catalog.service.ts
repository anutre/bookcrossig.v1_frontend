import { Injectable } from '@angular/core';
import { ApiService } from '@shared/services/api.service';
import { environment } from '../../../../environments/environment';
import { ApiPathConfig } from '@config/api.config';
import { Observable } from 'rxjs';
import { ICatalogResponse } from '@pages/catalog/interfaces/ICatalogResponse';

@Injectable()
export class CatalogService {
  constructor(private apiService: ApiService) {}

  fetchCatalog(
    page?: number,
    range: number = -1,
    longitude: number = -1,
    latitude: number = -1,
  ): Observable<ICatalogResponse> {
    let url = environment.apiUrl + ApiPathConfig.index;

    if (page) {
      url += `?page=${page}`;
    }

    if (range !== -1 && longitude !== -1 && latitude !== -1) {
      url += page ? '&' : '?';
      url += `range=${range}&longitude=${longitude}&latitude=${latitude}`;
    }

    return this.apiService.get<ICatalogResponse>(url);
  }
}
