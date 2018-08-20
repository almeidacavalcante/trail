import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, AbstractControl } from '@angular/forms';
import { Produto } from '../models/produto';
import { ProdutoService } from '../services/produto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastrar-produto',
  templateUrl: './cadastrar-produto.component.html',
  styleUrls: ['./cadastrar-produto.component.scss']
})
export class CadastrarProdutoComponent implements OnInit {
  
  private _cadastrarProdutoForm : FormGroup = new FormGroup({
    nome: new FormControl(),
    descricao: new FormControl(),
    preco: new FormControl(),
    estoque: new FormControl(),
    dataValidade: new FormControl(),
    isPerecivel: new FormControl(),
  });

  private _produto : Produto;

  constructor(private produtoService: ProdutoService, private router: Router) { }

  ngOnInit() {

  }

  /**
   * cadastrarProduto
   */
  public cadastrarProduto() {
    console.log('FORM GROUP: ', this.cadastrarProdutoForm);

    this.produto = new Produto(this.nome.value, this.descricao.value, this.preco.value,
      this.estoque.value, new Date(this.dataValidade.value), this.isPerecivel.value);

    this.produtoService.adicionarProduto(this.produto);

    this.produtoService.produtos.forEach( produto => {
      console.log('Produto: ', produto);
    });

    this.router.navigate(['listar-produtos']);
  }

  public get nome(): AbstractControl {
    return this.cadastrarProdutoForm.get('nome');
  }
  public get descricao(): AbstractControl {
    return this.cadastrarProdutoForm.get('descricao');
  }
  public get preco(): AbstractControl {
    return this.cadastrarProdutoForm.get('preco');
  }
  public get estoque(): AbstractControl {
    return this.cadastrarProdutoForm.get('estoque');
  }
  public get dataValidade(): AbstractControl {
    return this.cadastrarProdutoForm.get('dataValidade');
  }
  public get isPerecivel(): AbstractControl {
    return this.cadastrarProdutoForm.get('isPerecivel');
  }
  public get cadastrarProdutoForm(): FormGroup {
    return this._cadastrarProdutoForm;
  }
  public get produto() : Produto {
    return this._produto;
  }
  public set produto(v : Produto) {
    this._produto = v;
  }
}
