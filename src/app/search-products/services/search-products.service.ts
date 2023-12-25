import { Injectable } from '@angular/core';
import { Search } from '../models/search';
import { Observable, of } from 'rxjs';
import { BaseService } from '../../shared/services/base.service';
import { HttpClient } from '@angular/common/http';
import { ItemDesResponse } from '../models/itemdesResponse';

@Injectable()
export class SearchProductsService extends BaseService {

  private apiUrl = `http://localhost:3000`;

  constructor(protected httpClient: HttpClient) {
    super(httpClient)
  }

  getProducts(name: string): Observable<Search> {
    return this.doGet(`${this.apiUrl}/items?q=${name}`);
  }

  getDescriptionProduct(idProduct: string): Observable<ItemDesResponse> {
    // return this.doGet(`${this.apiUrl}/items/${idProduct}`);
    const item: ItemDesResponse = {
      author: {
        name: "john",
        lastname: "lopez"
      },
      item: {
        id: 'MLA1136716168',
        condition : 'new',
        description: 'La notebook más delgada y ligera de Apple viene con los superpoderes del chip M1. Termina todos tus proyectos mucho más rápido con el CPU de 8 núcleos y disfruta como nunca antes de apps y juegos con gráficos avanzados gracias al GPU de hasta 8 núcleos. Además, el Neural Engine de 16 núcleos se encarga de acelerar todos los procesos de aprendizaje automático. Todo en un diseño silencioso sin ventilador que te ofrece la mayor duración de batería en una MacBook Air: hasta 18 horas. (1) Portátil como siempre, más poderosa que nunca.\n\n\nAvisos Legales\nNo todos los recursos y configuraciones están disponibles en todos los países.\n(1) La duración de la batería varía según el uso y la configuración.\n(2) Comparado con la generación anterior.\n(3) El tamaño de la pantalla se mide en diagonal.',
        free_shipping: true,
        price: {
          amount: 3000,
          currency: 'da',
          decimals: 0
        },
        title: 'Zapatillas Avid Fof - Test Item',
        sold_quantity: 213,
        picture: 'https://http2.mlstatic.com/D_648428-MLA46516517286_062021-O.jpg"'
      }
    }
    return of(item);
  }
}
