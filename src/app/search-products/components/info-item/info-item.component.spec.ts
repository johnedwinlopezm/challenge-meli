import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoItemComponent } from './info-item.component';

describe('InfoListComponent', () => {
  let component: InfoItemComponent;
  let fixture: ComponentFixture<InfoItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InfoItemComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(InfoItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('render info item', () => {
    component.item = {
      title: 'Renault Koleos Intens 2.5 Cvt 4x4 2019 Hermosa! (aes)',
      id: 'MLA1590776010',
      picture: 'http://http2.mlstatic.com/D_998066-MLA73279960175_122023-I.jpg',
      free_shipping: false,
      condition: 'used',
      price: {
        amount: 32000,
        currency: 'USD',
        decimals: 0
      }
    }
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('img')?.title).toEqual('picture');
  });
});
