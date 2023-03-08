import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MesaCursosPageRoutingModule } from './mesa-cursos-routing.module';

import { MesaCursosPage } from './mesa-cursos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    MesaCursosPageRoutingModule
  ],
  declarations: [MesaCursosPage]
})
export class MesaCursosPageModule {}
