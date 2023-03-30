import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'clientes',
    loadChildren: () =>
      import('./pages/clientes/clientes.module').then((m) => m.ClientesModule),
  },
  {
    path: 'produtos',
    loadChildren: () =>
      import('./pages/produtos/produtos.module').then((m) => m.ProdutosModule),
  },
  {
    path: 'consulta-cep',
    loadChildren: () =>
      import('./pages/consulta-cep/consulta-cep.module').then(
        (m) => m.ConsultaCepModule
      ),
  },
];

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
