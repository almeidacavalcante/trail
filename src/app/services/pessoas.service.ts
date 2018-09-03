import { Injectable, EventEmitter, OnInit } from '@angular/core';
import { Pessoa } from '../models/pessoa';
import { RequestService } from './api/request.service';
import { Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PessoasService {

  private _pessoas: Array<Pessoa> = new Array<Pessoa>();
  private _buscaRealizada: EventEmitter<Pessoa> = new EventEmitter<Pessoa>();
  private _novaPessoaCadastrada: EventEmitter<Array<Pessoa>> = new EventEmitter();
  private _api = 'http://localhost:3000/api/pessoas';

  constructor(
    private requestService: RequestService
  ) { }

  /**
   * adicionarProduto
   */
  public adicionarPessoa(pessoa: Pessoa) {
    const json = JSON.stringify(pessoa);
    const header = new Headers();
    header.append('content-type', 'json');
    this.requestService.post(this._api + '/add', json, header).subscribe((res: Response) => {
      console.log(res);
    });
    this.novaPessoaCadastrada.emit(this.pessoas);
  }

  /**
   * getPessoaById
   */
  public getPessoaById(id: string) {
    this.requestService.get(this._api + '/' + id).subscribe((res: Response) => {
      this.buscaRealizada.emit(res.json());
    });
  }

  /**
   * getAll
   */
  public getAll(): Observable<any> {
    return this.requestService.get(this._api + '/getAll');
  }
  public get pessoas(): Array<Pessoa> {
    return this._pessoas;
  }
  public set pessoas(v: Array<Pessoa>) {
    this._pessoas = v;
  }
  public get novaPessoaCadastrada(): EventEmitter<Array<Pessoa>> {
    return this._novaPessoaCadastrada;
  }
  public set novaPessoaCadastrada(v: EventEmitter<Array<Pessoa>>) {
    this._novaPessoaCadastrada = v;
  }
  public get buscaRealizada(): EventEmitter<Pessoa> {
    return this._buscaRealizada;
  }
  public set buscaRealizada(v: EventEmitter<Pessoa>) {
    this._buscaRealizada = v;
  }
}
