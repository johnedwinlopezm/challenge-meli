import { Injectable } from '@angular/core';
import { Search } from '../models/search';
import { Observable, of } from 'rxjs';

@Injectable()
export class SearchProductsService {

  constructor() { }

  getProducts(name: string) : Observable<Search>{
    const listPro : Search = {
      author: {
        name: 'john',
        lastname: 'Lopez'
      },
      categories:['categoria1'],
      items:[
        {
          id:'MLA1160572910',
          title: 'Monitor Led Samsung 22',
          picture: 'http://http2.mlstatic.com/D_843829-MLU72646996287_112023-I.jpg',
          free_shipping: true,
          price: {
            amount: 24825.21,
            currency: 'ARS',
            decimals: 12
          },
          condition:'new'
        },
        {
          id:'MLA1106963999',
          title: 'Pc Computadora Completa Intel I3 1tb 8gb Con Monitor Led 19',
          picture: 'http://http2.mlstatic.com/D_790556-MLA40569330791_012020-I.jpg',
          free_shipping: true,
          price: {
            amount: 75199.81,
            currency: 'ARS',
            decimals: 12
          },
          condition:'new'
        }
      ]
    }
    return of(listPro);
  }
}
