import { Injectable } from '@angular/core';
import { Search } from '../models/search';
import { Observable, of } from 'rxjs';
import { BaseService } from '../../shared/services/base.service';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class SearchProductsService extends BaseService{

  private apiUrl = `http://localhost:3000`;

  constructor(protected httpClient: HttpClient) {
    super(httpClient)
  }

  getProducts(name: string) : Observable<Search>{
    return this.doGet(`${this.apiUrl}/items?q=${name}`);
  }
}
