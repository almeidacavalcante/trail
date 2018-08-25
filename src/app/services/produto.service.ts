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
    const p1 = new Produto('1', 'Mel de Jandaíra', 'Frasco com 500ml do melhor mel de jandaíra', 15.40, 0, false, 400, new Date('2019-02-02'), true, false, '0');
    const p2 = new Produto('2','Arroz Comil', 'Pacote de 1 kg', 2.20, 0, false, 400, new Date('2020-02-02'), true, false, '0');
    const p3 = new Produto('3','Cerveja Heineken', 'Longneck Heineken, aproveite a pureza alemã', 4.30, 0, false, 400, new Date('2019-02-02'), true, false, '1');
    const p4 = new Produto('4','Queijo Faixa Azul', 'Queijo azul em cilindros, especial para tira-gostos e massas', 17.40, 0, false, 400, new Date('2019-03-02'), true, false, '0');
    const p5 = new Produto('5','Picanha Angus', 'Melhor picanha do Brasil', 44.10, 0, false, 400, new Date('2018-11-11'), true, false, '0');
    const p6 = new Produto('6','Cerveja Heineken', 'Longneck Heineken, aproveite a pureza alemã', 4.30, 0, true, 400, new Date('2019-02-02'), true, false, '0');
    const p7 = new Produto('7','Queijo Faixa Azul', 'Queijo azul em cilindros, especial para tira-gostos e massas', 17.40, 0, true, 400, new Date('2019-03-02'), true, false, '0');
    const p8 = new Produto('8','Picanha Angus', 'Melhor picanha do Brasil', 44.10, 0, true, 400, new Date('2018-11-11'), true, false, '0');

    this.produtos.push(p1, p2, p3, p4, p5, p6, p7, p8);
  }

  /**
   * adicionarProduto
   */
  public adicionarProduto(produto: Produto) {
    this.produtos.push(produto);
    this.novoProdutoCadastrado.emit(this.produtos);
  }

  /**
   * getProdutoById
   */
  public getProdutoById(id: string): Produto{
    const produtoSelecionado = this.produtos.filter( (produto, index) => {
      return produto.id === id;
    })

    return produtoSelecionado[0];
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
