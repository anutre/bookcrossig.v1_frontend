import { Injectable } from '@angular/core';
import { ApiService } from '@shared/services/api.service';
import { environment } from '../../../environments/environment';
import { ApiPathConfig } from '@config/api.config';
import { IMetaCounter } from '@shared/interfaces/IMetaCounter';

@Injectable()
export class MetaService {
  constructor(private apiService: ApiService) {}

  fetchMetaCounter() {
    const url = environment.apiUrl + ApiPathConfig.metaCounters;

    return this.apiService.get<IMetaCounter>(url);
  }
}
