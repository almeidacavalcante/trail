import { Injectable, EventEmitter } from '@angular/core';
import { Produto } from '../models/produto';
import { RequestService } from './api/request.service';
import { Observable } from 'rxjs';
import { Response, Headers } from '@angular/http';
import { debug } from 'util';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  private _produtos: Array<Produto> = new Array<Produto>();
  private _novoProdutoCadastrado: EventEmitter<Array<Produto>> = new EventEmitter();
  private _api = 'http://localhost:3000/api/produtos';

  constructor(private requestService: RequestService) {
    this.carregarProdutos();
  }

  private carregarProdutos() {
    this.getAll().subscribe((res: Response) => {
      const jsonProdutos = res.json();
      jsonProdutos.forEach(p => {
        const produto = this.convertToProduto(p);
        this.produtos.push(produto);
      });
    });
  }

  public convertToProduto(json: any) {
    const produto = new Produto(
      json['nome'],
      json['descricao'],
      json['preco'],
      json['precoPromocional'],
      json['isPromocao'],
      json['estoque'],
      new Date(json['dataValidade']),
      json['isPerecivel'],
      json['isPublico'],
      json['categoria']);
    produto.id = json['_id'];
    return produto;
  }

  /**
   * adicionarProduto
   */
  public adicionarProduto(produto: Produto) {
    console.log(JSON.stringify(produto));
    const header = new Headers();
    header.append('content-type', 'json');
    this.requestService.post(this._api + '/add', JSON.stringify(produto), header).subscribe((res: Response) => {

    });
    this.novoProdutoCadastrado.emit(this.produtos);
  }

  /**
   * getAll
   */
  public getAll(): Observable<any> {
    return this.requestService.get(this._api + '/getAll');
  }

  /**
   * getProdutoById
   */
  public getProdutoById(id: string): Observable<any> {
    return this.requestService.get(this._api + '/' + id);
  }

  public get produtos(): Array<Produto> {
    return this._produtos;
  }
  public set produtos(v: Array<Produto>) {
    this._produtos = v;
  }
  public get novoProdutoCadastrado(): EventEmitter<Array<Produto>> {
    return this._novoProdutoCadastrado;
  }
  public set novoProdutoCadastrado(v: EventEmitter<Array<Produto>>) {
    this._novoProdutoCadastrado = v;
  }
}
