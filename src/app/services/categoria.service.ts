import { Injectable, EventEmitter } from '@angular/core';
import { Categoria } from '../models/categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  private _categorias: Array<Categoria> = new Array<Categoria>();
  private _novaCategoriaAdicionada: EventEmitter<Array<Categoria>> = new EventEmitter<Array<Categoria>>();

  constructor() {
    this.carregarCategoriasMock();
  }

  private carregarCategoriasMock() {
    const p1 = new Categoria('Alimentos', 'Categoria Alimentícia');
    const p2 = new Categoria('Bebidas', 'Categoria de Bebidas');
    const p3 = new Categoria('Biscoitos', 'Categoria de Biscoitos');
    const p4 = new Categoria('Carnes', 'Categoria de Carnes');
    const p5 = new Categoria('Eletrônicos', 'Categoria de Eletro-domésticos e eletrônicos');
    const p6 = new Categoria('Vestuário', 'Categoria de Roupas e Calçados');

    p1.id = '1';
    p2.id = '2';
    p3.id = '3';
    p4.id = '4';
    p5.id = '5';
    p6.id = '6';

    this.categorias.push(p1, p2, p3, p4, p5, p6);
  }

  /**
   * getCategoriaById
   */
  public getCategoriaById(id: string): Categoria {
    const produtoSelecionado = this.categorias.filter((categoria, index) => {
      return categoria.id === id;
    });

    return produtoSelecionado[0];
  }

  /**
   * cadastrarCategoria
   */
  public cadastrarCategoria(c: Categoria) {
    this._categorias.push(c);
    this._novaCategoriaAdicionada.emit(this._categorias);
  }

  public get categorias(): Array<Categoria> {
    return this._categorias;
  }

  public get novaCategoriaAdicionada(): EventEmitter<Array<Categoria>> {
    return this._novaCategoriaAdicionada;
  }
}
