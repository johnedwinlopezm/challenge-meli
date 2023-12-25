import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListProductsComponent } from './screens/list-products/list-products.component';
import { DetailProductComponent } from './screens/detail-product/detail-product.component';

const routes: Routes = [
  {
    path: ':product', component: ListProductsComponent
  },
  {
    path: 'description/:idProduct', component: DetailProductComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchProductsRoutingModule { }
