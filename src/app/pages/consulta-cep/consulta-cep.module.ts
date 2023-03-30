import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsultaCepRoutingModule } from './consulta-cep-routing.module';
import { ConsultarComponent } from './components/consultar/consultar.component';
import { FormsModule } from '@angular/forms';
import { FilhoComponent } from './components/consultar/component/filho/filho.component';

@NgModule({
  declarations: [ConsultarComponent, FilhoComponent],
  imports: [CommonModule, ConsultaCepRoutingModule, FormsModule],
})
export class ConsultaCepModule {}
