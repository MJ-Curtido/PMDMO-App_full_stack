import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompradosPage } from './comprados.page';

const routes: Routes = [
  {
    path: '',
    component: CompradosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompradosPageRoutingModule {}
