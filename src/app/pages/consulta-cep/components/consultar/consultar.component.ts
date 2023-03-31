import { Component, OnInit, ViewChild } from '@angular/core';
import { ViaCepService } from '@src/app/shared/services/via-cep/via-cep.service';
import { ETipoCepResponse } from '../../enums/tipo-response.enum';
import { IConsultaCepResponse } from '../../interfaces/consulta-cep-response.interface';
import { FilhoComponent } from './component/filho/filho.component';
import { IList } from './component/filho/interfaces/list-filho.interface';

@Component({
  selector: 'app-consultar',
  templateUrl: './consultar.component.html',
  styleUrls: ['./consultar.component.scss'],
})
export class ConsultarComponent implements OnInit {
  @ViewChild('filhoComponent', { static: true }) filhoComponent: FilhoComponent;
  private _tipoCepJson = '';

  titulo = 'CONSULTA CEP';
  retornoJson: IConsultaCepResponse;
  valorDoCep: string = '';
  showBtnFilho = false;
  listFilho: IList[] = [];

  constructor(private _viaCepService: ViaCepService) {}

  ngOnInit(): void {}

  consultarCep(event) {
    this.showBtnFilho = true;

    this.listFilho = [
      {
        id: 1,
        item: 'Item 1',
      },
      {
        id: 2,
        item: 'Item 2',
      },

      {
        id: 3,
        item: 'Item 3',
      },
    ];

    // if (event.target.value.length < 7) return;

    // this._viaCepService
    //   .consultarCep(event.target.value, ETipoCepResponse.Json)
    //   .subscribe((res) => {
    //     this.retornoJson = res;
    //   });
    // console.log(event);
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

  metodoQueRecebeDoPaiParaMudarTitulo(novoTitulo: string) {
    this.titulo = novoTitulo;
    alert(novoTitulo);
  }
}
