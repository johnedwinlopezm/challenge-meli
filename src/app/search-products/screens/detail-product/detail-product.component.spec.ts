import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailProductComponent } from './detail-product.component';
import { SearchProductsService } from '../../services/search-products.service';
import { MockSearchProductsService } from '../../../shared/commontest/search-products-mocks';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('DetailProductComponent', () => {
  let component: DetailProductComponent;
  let fixture: ComponentFixture<DetailProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetailProductComponent],
      providers:[
        { provide: SearchProductsService, useClass: MockSearchProductsService },
        { provide: ActivatedRoute, useValue: { 'params': of({ 'id': 1, 'idProduct': 'cas4214a' }) } }
       //ActivatedRoute
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetailProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('get Description Product', () => {
    //expect(component).toBeTruthy();
    expect((<any>component).searchProducts.getDescriptionProduct).toHaveBeenCalledTimes(1);
  });

  it('render detail product', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('label')?.textContent).toEqual('Autos, Motos y Otros>');
    expect(compiled.querySelector('img')?.title).toEqual('picture');
  });
});
