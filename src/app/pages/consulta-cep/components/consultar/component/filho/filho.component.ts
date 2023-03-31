import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IList } from './interfaces/list-filho.interface';

@Component({
  selector: 'app-filho',
  templateUrl: './filho.component.html',
  styleUrls: ['./filho.component.scss'],
})
export class FilhoComponent implements OnInit {
  @Input() title: string = 'FUNFOU';
  @Input() subtitle: string = 'Olha só';
  @Input() showBtn = true;
  @Input() lista: IList[] = [];
  @Output() enviarNovoTituloAoPai = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  enviarAoPai() {
    this.enviarNovoTituloAoPai.emit('NOVO TITULO');
  }
}
