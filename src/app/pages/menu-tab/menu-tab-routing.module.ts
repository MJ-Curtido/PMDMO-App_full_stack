import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuTabPage } from './menu-tab.page';

const routes: Routes = [
  {
    path: '',
    component: MenuTabPage,
    children: [
      {
        path: 'principal',
        loadChildren: () => import('./../principal/principal.module').then(m => m.PrincipalPageModule)
      },
      {
        path: 'comprados',
        loadChildren: () => import('./../comprados/comprados.module').then(m => m.CompradosPageModule)
      },
      {
        path: '',
        redirectTo: '/menu-tab/principal',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuTabPageRoutingModule {}
