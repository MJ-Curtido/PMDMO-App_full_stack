import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CompradosPageRoutingModule } from './comprados-routing.module';

import { CompradosPage } from './comprados.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CompradosPageRoutingModule
  ],
  declarations: [CompradosPage]
})
export class CompradosPageModule {}
