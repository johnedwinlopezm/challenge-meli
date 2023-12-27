import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListProductsComponent } from './list-products.component';
import { SearchProductsService } from '../../services/search-products.service';
import { MockSearchProductsService } from '../../../shared/commontest/search-products-mocks';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('ListProductsComponent', () => {
  let component: ListProductsComponent;
  let fixture: ComponentFixture<ListProductsComponent>;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListProductsComponent],
      providers:[
        { provide: SearchProductsService, useClass: MockSearchProductsService },
        { provide: ActivatedRoute, useValue: { paramMap: of({ get: (key:any) => key }) } },
       //ActivatedRoute
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
