import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConsultarComponent } from './components/consultar/consultar.component';

const routes: Routes = [
  {
    path: 'consultar',
    component: ConsultarComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConsultaCepRoutingModule {}
