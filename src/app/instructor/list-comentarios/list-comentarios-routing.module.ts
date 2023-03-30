import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListComentariosPage } from './list-comentarios.page';

const routes: Routes = [
  {
    path: '',
    component: ListComentariosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListComentariosPageRoutingModule {}
