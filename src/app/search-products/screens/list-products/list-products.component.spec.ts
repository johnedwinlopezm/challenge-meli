import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListProductsComponent } from './list-products.component';
import { SearchProductsService } from '../../services/search-products.service';
import { MockSearchProductsService } from '../../../shared/commontest/search-products-mocks';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { InfoItemComponent } from '../../components/info-item/info-item.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SearchProductsModule } from '../../search-products.module';

describe('ListProductsComponent', () => {
  let component: ListProductsComponent;
  let fixture: ComponentFixture<ListProductsComponent>;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListProductsComponent],
      imports:[SearchProductsModule],
      providers:[
        { provide: SearchProductsService, useClass: MockSearchProductsService },
        { provide: ActivatedRoute, useValue: { 'params': of({ 'id': 1, 'product': 'cas4214a' }) } }
       //ActivatedRoute
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('get list product', () => {
    //expect(component).toBeTruthy();
    expect((<any>component).searchProducts.getProducts).toHaveBeenCalledTimes(1);
  });

  it('render list', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('label')?.textContent).toEqual('Autos, Motos y Otros>');
    expect(compiled.querySelector('app-info-item')?.textContent).toEqual('$ 32000Renault Koleos Intens 2.5 Cvt 4x4 2019 Hermosa! (aes)used');
  });
});
