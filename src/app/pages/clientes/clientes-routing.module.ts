import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientesComponent } from './components/clientes/clientes.component';
import { ListarComponent } from './components/clientes/listar/listar.component';

const routes: Routes = [
  {
    path: '',
    component: ClientesComponent,
  },
  {
    path: 'listar/:id',
    component: ListarComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientesRoutingModule {}
