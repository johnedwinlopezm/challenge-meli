import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchProductsRoutingModule } from './search-products-routing.module';
import { ListProductsComponent } from './screens/list-products/list-products.component';
import { DetailProductComponent } from './screens/detail-product/detail-product.component';
import { InfoItemComponent } from './components/info-item/info-item.component';
import { SearchProductsService } from './services/search-products.service';


@NgModule({
  declarations: [
    ListProductsComponent,
    DetailProductComponent,
    InfoItemComponent
  ],
  imports: [
    CommonModule,
    SearchProductsRoutingModule
  ],
  providers:[
    SearchProductsService
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SearchProductsModule { }
