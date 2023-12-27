import { Injectable } from '@angular/core';
import { Search } from '../models/search';
import { Observable, of } from 'rxjs';
import { BaseService } from '../../shared/services/base.service';
import { HttpClient } from '@angular/common/http';
import { ItemDesResponse } from '../models/itemdesResponse';

@Injectable()
export class SearchProductsService extends BaseService {

  private apiUrl = `http://localhost:3000/api/v1/products/`;
  private categories: string[]=[];

  constructor(protected httpClient: HttpClient) {
    super(httpClient)
  }

  getProducts(name: string): Observable<Search> {
    return this.doGet(`${this.apiUrl}/items?q=${name}`);
  }

  getDescriptionProduct(idProduct: string): Observable<ItemDesResponse> {
    return this.doGet(`${this.apiUrl}/items/${idProduct}`);
  }

  setCategorias(categories: string[]){
    this.categories = categories;
  }

  getCategorias() {
    return this.categories;
  }

}
