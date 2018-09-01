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
  private _api = 'http://localhost:3000/produtos';

  constructor(private requestService: RequestService) {
    this.carregarProdutos();
  }

  private carregarProdutos() {
    this.getAll().subscribe((res: Response) => {
      const jsonProdutos = res.json();
      jsonProdutos.forEach(p => {
        this.produtos.push(new Produto(p['_nome'], p['_descricao'], p['_preco'], p['_precoPromocional'], p['_isPromocao'],
          p['_estoque'], new Date(p['_dataValidade']), p['_isPerecivel'], p['_isPublico'], p['_categoria'], p['_id']));
      });
    });
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
  public getProdutoById(id: string): Produto {
    const produtoSelecionado = this.produtos.filter((produto, index) => {
      return produto.id === id;
    });

    return produtoSelecionado[0];
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
