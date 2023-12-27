import { TestBed } from '@angular/core/testing';

import { SearchProductsService } from './search-products.service';
import { HttpClientModule } from '@angular/common/http';

describe('SearchProductsService', () => {
  let service: SearchProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers:[SearchProductsService]
    });
    service = TestBed.inject(SearchProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
