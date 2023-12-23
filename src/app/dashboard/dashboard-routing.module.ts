import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './screens/dashboard/dashboard.component';

const routes: Routes = [
  { 
  path: 'dashboard', component: DashboardComponent,
  children: [
   { path: 'items', loadChildren: () => import('../search-products/search-products.module').then(m => m.SearchProductsModule) }
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
