import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdutosRoutingModule } from './produtos-routing.module';
import { ProdutosComponent } from './components/produtos/produtos.component';

@NgModule({
  declarations: [ProdutosComponent],
  imports: [CommonModule, ProdutosRoutingModule],
})
export class ProdutosModule {}
