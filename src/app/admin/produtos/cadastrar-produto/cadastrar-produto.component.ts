import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, AbstractControl } from '@angular/forms';
import { Produto } from '../../../models/produto';
import { ProdutoService } from '../../../services/produto.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import * as moment from 'moment';
import { CategoriaService } from '../../../services/categoria.service';
import { Categoria } from '../../../models/categoria';

@Component({
  selector: 'app-cadastrar-produto',
  templateUrl: './cadastrar-produto.component.html',
  styleUrls: ['./cadastrar-produto.component.scss']
})
export class CadastrarProdutoComponent implements OnInit, OnDestroy {

  private _cadastrarProdutoForm: FormGroup = new FormGroup({
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
    isPublico: new FormControl(false)
  });

  private _produto: Produto;
  private _categorias: Array<Categoria>;

  private _subscriptionProdutoService: Subscription;
  private _subscriptionCategoriaService: Subscription;


  constructor(
    private produtoService: ProdutoService,
    private categoriaService: CategoriaService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.setupEditarProduto();
    this.setupCategorias();
  }

  ngOnDestroy() {
    if (this._subscriptionProdutoService) {
      this._subscriptionProdutoService.unsubscribe();
    }
    if (this._subscriptionCategoriaService) {
      this._subscriptionCategoriaService.unsubscribe();
    }
  }

  private setupCategorias() {
    this.categorias = this.categoriaService.categorias;
    this.subscriptionCategoriaService = this.categoriaService.novaCategoriaAdicionada.subscribe(categorias => {
      this.categorias = categorias;
    });
  }

  private setupEditarProduto() {
    this.subscriptionProdutoService = this.activatedRoute.queryParamMap.subscribe(params => {
      // Caso haja id, trata-se de edição.
      if (params.get('id')) {
        this.produtoService.getProdutoById(params.get('id')).subscribe((res: Response) => {
          this.produto = this.produtoService.convertToProduto(res.json());
          this.carregarProduto();
        });
      }
    });
  }

  /**
   * cancelar
   */
  public cancelar() {
    this.router.navigate(['/listar-produtos']);
  }

  /**
   * carregarProduto
   */
  public carregarProduto() {
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

    this.produto = new Produto(
      this.nome.value,
      this.descricao.value,
      this.preco.value,
      this.precoPromocional.value,
      this.isPromocao.value,
      this.estoque.value,
      new Date(this.dataValidade.value),
      this.isPerecivel.value,
      isPublico,
      this.categoria.value
    );

    this.produtoService.adicionarProduto(this.produto);

    this.router.navigate(['listar-produtos']);
  }

  /**
   * editarProduto
   */
  public editarProduto() {
    console.log('EDITAR PRODUTO!');
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
  public get produto(): Produto {
    return this._produto;
  }
  public set produto(v: Produto) {
    this._produto = v;
  }
  public get id(): AbstractControl {
    return this.cadastrarProdutoForm.get('id');
  }
  public get subscriptionProdutoService(): Subscription {
    return this._subscriptionProdutoService;
  }
  public set subscriptionProdutoService(v: Subscription) {
    this._subscriptionProdutoService = v;
  }
  public get subscriptionCategoriaService(): Subscription {
    return this._subscriptionCategoriaService;
  }
  public set subscriptionCategoriaService(value: Subscription) {
    this._subscriptionCategoriaService = value;
  }
  public get categorias(): Array<Categoria> {
    return this._categorias;
  }
  public set categorias(value: Array<Categoria>) {
    this._categorias = value;
  }
}
