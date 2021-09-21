import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaisesPageRoutingModule } from './paises-routing.module';

import { PaisesPage } from './paises.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaisesPageRoutingModule
  ],
  declarations: [PaisesPage]
})
export class PaisesPageModule {}
