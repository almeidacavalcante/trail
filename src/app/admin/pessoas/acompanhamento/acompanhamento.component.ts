import { Component, OnInit } from '@angular/core';
import { PessoasService } from '../../../services/pessoas.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Pessoa } from '../../../models/pessoa';

@Component({
  selector: 'app-acompanhamento',
  templateUrl: './acompanhamento.component.html',
  styleUrls: ['./acompanhamento.component.scss']
})
export class AcompanhamentoComponent implements OnInit {


  private _subscriptionPessoasService: Subscription;
  private _pessoa: Pessoa;

  constructor(
    private pessoasService: PessoasService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {


    this.subscriptionPessoasService = this.activatedRoute.paramMap.subscribe(params => {
      if (params.get('id')) {
        this.pessoasService.getPessoaById(params.get('id'));

        this.pessoasService.buscaRealizada.subscribe(pessoa => {
          this.carregarPessoa(pessoa);
        });
      }
    });
  }

  private carregarPessoa(pessoa: Pessoa) {
    this.pessoa = pessoa;
    console.log('carregarPessoa() ', this.pessoa);
  }

  public get subscriptionPessoasService(): Subscription {
    return this._subscriptionPessoasService;
  }
  public set subscriptionPessoasService(v: Subscription) {
    this._subscriptionPessoasService = v;
  }
  public get pessoa(): Pessoa {
    return this._pessoa;
  }
  public set pessoa(value: Pessoa) {
    this._pessoa = value;
  }
}
