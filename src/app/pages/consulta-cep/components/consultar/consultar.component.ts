import { Component, OnInit, ViewChild } from '@angular/core';
import { ViaCepService } from '@src/app/shared/services/via-cep/via-cep.service';
import { ETipoCepResponse } from '../../enums/tipo-response.enum';
import { IConsultaCepResponse } from '../../interfaces/consulta-cep-response.interface';
import { FilhoComponent } from './component/filho/filho.component';

@Component({
  selector: 'app-consultar',
  templateUrl: './consultar.component.html',
  styleUrls: ['./consultar.component.scss'],
})
export class ConsultarComponent implements OnInit {
  @ViewChild('filhoComponent', { static: true }) filhoComponent: FilhoComponent;
  private _tipoCepJson = '';

  retornoJson: IConsultaCepResponse;
  valorDoCep: string = '';

  constructor(private _viaCepService: ViaCepService) {}

  ngOnInit(): void {}

  consultarCep(event) {
    if (event.target.value.length < 7) return;

    this._viaCepService
      .consultarCep(event.target.value, ETipoCepResponse.Json)
      .subscribe((res) => {
        this.retornoJson = res;
      });
    console.log(event);
  }

  consultarCepBtn() {
    this.filhoComponent.title = 'MUDEI NOVAMENTE VIA PAI';

    if (this.valorDoCep.length < 7) return;

    this._viaCepService
      .consultarCep(this.valorDoCep, ETipoCepResponse.Json)
      .subscribe((res) => {
        this.retornoJson = res;
      });
    console.log(event);
    console.log('CLIQUEI AQUI NO BTN');
  }
}
