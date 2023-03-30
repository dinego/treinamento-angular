import { Injectable } from '@angular/core';
import { IConsultaCepResponse } from '@src/app/pages/consulta-cep/interfaces/consulta-cep-response.interface';
import { environment } from '@src/environments/environment';
import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ViaCepService {
  constructor(private _httpClient: HttpClient) {}

  consultarCep(cep: string, tipo: string): Observable<IConsultaCepResponse> {
    return this._httpClient.get<IConsultaCepResponse>(
      `${environment.ConsultaCep}/${cep}/${tipo}`
    );
  }
}
