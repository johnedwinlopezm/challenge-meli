import { TestBed } from '@angular/core/testing';

import { SearchProductsService } from './search-products.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MockHttp } from '../../shared/commontest/search-products-mocks';

describe('SearchProductsService', () => {
  let service: SearchProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers:[
        SearchProductsService,
        { provide: HttpClient, useClass: MockHttp },
    ]
    });
    service = TestBed.inject(SearchProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getProducts', () => {
    service.getProducts('prueba');
    expect((<any>service).httpClient.get).toHaveBeenCalledTimes(1);
  });

  it('getDescriptionProduct', () => {
    service.getDescriptionProduct('prueba');
    expect((<any>service).httpClient.get).toHaveBeenCalledTimes(1);
  });
});
