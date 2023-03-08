import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MesaCursosPage } from './mesa-cursos.page';

const routes: Routes = [
  {
    path: '',
    component: MesaCursosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MesaCursosPageRoutingModule {}
