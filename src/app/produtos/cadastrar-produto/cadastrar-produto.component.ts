import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, AbstractControl } from '@angular/forms';
import { Produto } from '../../models/produto';
import { ProdutoService } from '../../services/produto.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import * as moment from "moment";

@Component({
  selector: 'app-cadastrar-produto',
  templateUrl: './cadastrar-produto.component.html',
  styleUrls: ['./cadastrar-produto.component.scss']
})
export class CadastrarProdutoComponent implements OnInit {
  
  private _cadastrarProdutoForm : FormGroup = new FormGroup({
    id: new FormControl(),
    nome: new FormControl(),
    descricao: new FormControl(),
    preco: new FormControl(),
    precoPromocional: new FormControl(),
    isPromocao: new FormControl(),
    estoque: new FormControl(),
    dataValidade: new FormControl(),
    isPerecivel: new FormControl(),
    categoria: new FormControl(),
    isPublico: new FormControl()
  });

  private _produto : Produto;
  private _subscription : Subscription;

  constructor(private produtoService: ProdutoService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.subscription = this.activatedRoute.queryParamMap.subscribe( params => {
      console.log(params);
      this.produto = this.produtoService.getProdutoById(params.get('id'));
      this.carregarProduto();
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  /**
   * cancelar
   */
  public cancelar() {
    this.router.navigate(['/listar-produtos'])
  }

  /**
   * carregarProduto
   */
  public carregarProduto() {
    this.id.setValue(this.produto.id);
    this.nome.setValue(this.produto.nome);
    this.descricao.setValue(this.produto.descricao);
    this.preco.setValue(this.produto.preco);
    this.precoPromocional.setValue(this.produto.precoPromocional);
    this.estoque.setValue(this.produto.estoque);
    const date = this.produto.dataValidade;
    this.dataValidade.setValue(moment(date).format('YYYY-MM-DD'));
    this.isPromocao.setValue(this.produto.isPromocao);
    this.isPerecivel.setValue(this.produto.isPerecivel);
    this.isPublico.setValue(this.produto.isPublico);
    this.categoria.setValue(this.produto.categoria);
  }

  /**
   * cadastrarProduto
   */
  public cadastrarProduto(isPublico: boolean) {
    console.log('FORM GROUP: ', this.cadastrarProdutoForm);

    this.produto = new Produto(
      this.id.value, 
      this.nome.value, 
      this.descricao.value, 
      this.preco.value, 
      this.precoPromocional.value,
      this.isPromocao.value,
      this.estoque.value, 
      new Date(this.dataValidade.value), 
      this.isPerecivel.value, 
      isPublico, 
      this.categoria.value);

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
  public get precoPromocional(): AbstractControl {
    return this.cadastrarProdutoForm.get('precoPromocional');
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
  public get isPublico(): AbstractControl {
    return this.cadastrarProdutoForm.get('isPublico');
  }
  public get isPromocao(): AbstractControl {
    return this.cadastrarProdutoForm.get('isPromocao');
  }
  public get categoria(): AbstractControl {
    return this.cadastrarProdutoForm.get('categoria');
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
  public get id(): AbstractControl {
    return this.cadastrarProdutoForm.get('id');
  }
  public get subscription() : Subscription {
    return this._subscription;
  }
  public set subscription(v : Subscription) {
    this._subscription = v;
  }
}
