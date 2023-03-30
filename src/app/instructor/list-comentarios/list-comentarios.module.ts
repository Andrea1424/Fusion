import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListComentariosPageRoutingModule } from './list-comentarios-routing.module';

import { ListComentariosPage } from './list-comentarios.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListComentariosPageRoutingModule
  ],
  declarations: [ListComentariosPage]
})
export class ListComentariosPageModule {}
