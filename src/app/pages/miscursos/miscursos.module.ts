import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MiscursosPageRoutingModule } from './miscursos-routing.module';

import { MiscursosPage } from './miscursos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MiscursosPageRoutingModule
  ],
  declarations: [MiscursosPage]
})
export class MiscursosPageModule {}
