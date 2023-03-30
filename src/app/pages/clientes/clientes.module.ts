import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientesRoutingModule } from './clientes-routing.module';
import { ClientesComponent } from './components/clientes/clientes.component';
import { ListarComponent } from './components/clientes/listar/listar.component';


@NgModule({
  declarations: [ClientesComponent, ListarComponent],
  imports: [
    CommonModule,
    ClientesRoutingModule
  ]
})
export class ClientesModule { }
