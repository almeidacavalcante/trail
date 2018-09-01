import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProdutoService } from '../../../services/produto.service';
import { Produto } from '../../../models/produto';
import { Subscription } from 'rxjs';
import { FormGroup, FormControl, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-listar-produtos',
  templateUrl: './listar-produtos.component.html',
  styleUrls: ['./listar-produtos.component.scss']
})
export class ListarProdutosComponent implements OnInit, OnDestroy {

  private _produtos: Array<Produto>;
  private _subscription: Subscription;

  private _pesquisarForm: FormGroup = new FormGroup({
    pesquisar: new FormControl()
  });

  constructor(private produtoService: ProdutoService) { }

  ngOnInit() {
    this.produtos = this.produtoService.produtos;
    this.subscription = this.produtoService.novoProdutoCadastrado.subscribe(produtos => {
      this.produtos = produtos;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  /**
   * pesquisar
   */
  public pesquisarProduto() {

  }

  /**
   * removeProduto
   */
  public removeProduto(index: number) {
    this.produtos.splice(index, 1);
  }

  public get produtos(): Array<Produto> {
    return this._produtos;
  }
  public set produtos(v: Array<Produto>) {
    this._produtos = v;
  }
  public get subscription(): Subscription {
    return this._subscription;
  }
  public set subscription(v: Subscription) {
    this._subscription = v;
  }
  public get pesquisar(): AbstractControl {
    return this.pesquisarForm.get('pesquisar');
  }
  public get pesquisarForm(): FormGroup {
    return this._pesquisarForm;
  }
  public set pesquisarForm(v: FormGroup) {
    this._pesquisarForm = v;
  }
}
