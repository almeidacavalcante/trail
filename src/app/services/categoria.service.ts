import { Injectable, EventEmitter } from '@angular/core';
import { Categoria } from '../models/categoria';
import { RequestService } from './api/request.service';
import { Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  private _categorias: Array<Categoria> = new Array<Categoria>();
  private _novaCategoriaAdicionada: EventEmitter<Array<Categoria>> = new EventEmitter<Array<Categoria>>();
  private _buscaRealizada: EventEmitter<Categoria> = new EventEmitter<Categoria>();
  private _api = 'http://localhost:3000/api/categorias';



  constructor(
    private requestService: RequestService
  ) {
    this.carregarCategorias();
  }

  public getAll(): Observable<any> {
    return this.requestService.get(this._api + '/getAll');
  }

  private carregarCategorias() {
    this.getAll().subscribe((res: Response) => {
      const jsonCategorias = res.json();
      jsonCategorias.forEach(c => {
        const categoria = new Categoria(c['nome'], c['descricao']);
        categoria.id = c['_id'];
        this._categorias.push(categoria);
      });
    });
  }

  /**
   * getCategoriaById
   */
  public getCategoriaById(id: string): Observable<any> {
    return this.requestService.get(this._api + '/' + id);
  }

  /**
  * adicionarProduto
  */
  public cadastrarCategoria(c: Categoria) {
    const json = JSON.stringify(c);
    const header = new Headers();
    header.append('content-type', 'json');
    this.requestService.post(this._api + '/add', json, header).subscribe((res: Response) => {
      console.log(res);
    });
    this.novaCategoriaAdicionada.emit(this._categorias);
  }

  public get categorias(): Array<Categoria> {
    return this._categorias;
  }

  public get novaCategoriaAdicionada(): EventEmitter<Array<Categoria>> {
    return this._novaCategoriaAdicionada;
  }
  public get buscaRealizada(): EventEmitter<Categoria> {
    return this._buscaRealizada;
  }
  public set buscaRealizada(v: EventEmitter<Categoria>) {
    this._buscaRealizada = v;
  }
}
