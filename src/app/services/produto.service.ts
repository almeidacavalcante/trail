import { Injectable, EventEmitter } from '@angular/core';
import { Produto } from '../models/produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  private _produtos : Array<Produto> = new Array<Produto>();
  private _novoProdutoCadastrado : EventEmitter<Array<Produto>> = new EventEmitter();

  

  constructor() {
    this.carregarProdutosMock();
  }

  private carregarProdutosMock() {
    const p1 = new Produto('Mel de Jandaíra', 'Frasco com 500ml do melhor mel de jandaíra', 15.40, 400, new Date('2019-02-02'), true);
    const p2 = new Produto('Arroz Comil', 'Pacote de 1 kg', 2.20, 400, new Date('2020-02-02'), true);
    const p3 = new Produto('Cerveja Heineken', 'Longneck Heineken, aproveite a pureza alemã', 4.30, 400, new Date('2019-02-02'), true);
    const p4 = new Produto('Queijo Faixa Azul', 'Queijo azul em cilindros, especial para tira-gostos e massas', 17.40, 400, new Date('2019-03-02'), true);
    const p5 = new Produto('Picanha Angus', 'Melhor picanha do Brasil', 44.10, 400, new Date('2018-11-11'), true);
    const p6 = new Produto('Cerveja Heineken', 'Longneck Heineken, aproveite a pureza alemã', 4.30, 400, new Date('2019-02-02'), true);
    const p7 = new Produto('Queijo Faixa Azul', 'Queijo azul em cilindros, especial para tira-gostos e massas', 17.40, 400, new Date('2019-03-02'), true);
    const p8 = new Produto('Picanha Angus', 'Melhor picanha do Brasil', 44.10, 400, new Date('2018-11-11'), true);

    this.produtos.push(p1, p2, p3, p4, p5, p6, p7, p8);
  }

  /**
   * adicionarProduto
   */
  public adicionarProduto(produto: Produto) {
    this.produtos.push(produto);
    this.novoProdutoCadastrado.emit(this.produtos);
  }

  public get produtos() : Array<Produto> {
    return this._produtos;
  }
  public set produtos(v : Array<Produto>) {
    this._produtos = v;
  }
  public get novoProdutoCadastrado() : EventEmitter<Array<Produto>> {
    return this._novoProdutoCadastrado;
  }
  public set novoProdutoCadastrado(v : EventEmitter<Array<Produto>>) {
    this._novoProdutoCadastrado = v;
  }
}
