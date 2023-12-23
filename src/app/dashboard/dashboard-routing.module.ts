import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './screens/dashboard/dashboard.component';

const routes: Routes = [
  { 
  path: 'dashboard', component: DashboardComponent,
  children: [
   // { path: 'character', loadChildren: () => import('../character/character.module').then(m => m.CharacterModule) }
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
