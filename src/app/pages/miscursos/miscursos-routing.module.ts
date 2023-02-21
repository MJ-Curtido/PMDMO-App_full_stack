import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MiscursosPage } from './miscursos.page';

const routes: Routes = [
  {
    path: '',
    component: MiscursosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MiscursosPageRoutingModule {}
