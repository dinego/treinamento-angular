import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss'],
})
export class ListarComponent implements OnInit {
  idCliente: any;
  constructor(private _router: Router, private _avRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.idCliente = this._avRoute.snapshot.params['id'];
  }
}
