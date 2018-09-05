import { Component, OnInit, OnDestroy } from '@angular/core';
import { CategoriaService } from '../../../services/categoria.service';
import { Categoria } from '../../../models/categoria';
import { Subscription } from 'rxjs';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-cadastrar-categoria',
  templateUrl: './cadastrar-categoria.component.html',
  styleUrls: ['./cadastrar-categoria.component.scss']
})
export class CadastrarCategoriaComponent implements OnInit, OnDestroy {

  private _categorias: Array<Categoria> = new Array<Categoria>();
  private _subscription: Subscription;
  private _isEditing = false;

  private _cadastrarCategoriaForm: FormGroup = new FormGroup({
    nome: new FormControl(null, Validators.required),
    descricao: new FormControl(null),
    id: new FormControl(null)
  });

  private _pesquisarForm: FormGroup = new FormGroup({
    pesquisar: new FormControl()
  });

  constructor(private categoriaService: CategoriaService) { }

  ngOnInit() {
    this.categorias = this.categoriaService.categorias;
    this.subscription = this.categoriaService.novaCategoriaAdicionada.subscribe(categorias => {
      this.categorias = categorias;
    });
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  /**
   * cadastrarCategoria
   */
  public cadastrarCategoria() {
    const categoria = new Categoria(
      this.nome.value,
      this.descricao.value
    );

    if (this.isEditing) {
      categoria.id = this.id.value;
      this.categoriaService.editarCategoria(categoria);
    } else {
      this.categoriaService.cadastrarCategoria(categoria);
    }

    this.cadastrarCategoriaForm.reset();
    this.isEditing = false;
  }


  /**
   * pesquisarCategoria
   */
  public pesquisarCategoria() {

  }

  /**
   * editarCategoria
   */
  public carregarCategoriaEdicao(categoria: Categoria) {
    this.isEditing = true;
    this.carregarCategoria(categoria);
  }

  private carregarCategoria(categoria: Categoria) {
    this.nome.setValue(categoria.nome, { emitEvent: true });
    this.descricao.setValue(categoria.descricao);
    this.id.setValue(categoria.id);
  }

  /**
   * removeProduto
   */
  public removerCategoria(categoria: Categoria) {
    this.categoriaService.removerCategoria(categoria);
  }

  public get categorias(): Array<Categoria> {
    return this._categorias;
  }
  public set categorias(v: Array<Categoria>) {
    this._categorias = v;
  }
  public get subscription(): Subscription {
    return this._subscription;
  }
  public set subscription(v: Subscription) {
    this._subscription = v;
  }
  public get pesquisarForm(): FormGroup {
    return this._pesquisarForm;
  }
  public set pesquisarForm(v: FormGroup) {
    this._pesquisarForm = v;
  }
  public get cadastrarCategoriaForm(): FormGroup {
    return this._cadastrarCategoriaForm;
  }
  public set cadastrarCategoriaForm(v: FormGroup) {
    this._cadastrarCategoriaForm = v;
  }
  public get nome(): AbstractControl {
    return this._cadastrarCategoriaForm.get('nome');
  }
  public get descricao(): AbstractControl {
    return this._cadastrarCategoriaForm.get('descricao');
  }
  public get id(): AbstractControl {
    return this._cadastrarCategoriaForm.get('id');
  }
  public get isEditing(): boolean {
    return this._isEditing;
  }
  public set isEditing(value: boolean) {
    this._isEditing = value;
  }
}
