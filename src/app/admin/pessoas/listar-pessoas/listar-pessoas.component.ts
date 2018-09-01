import { Component, OnInit } from '@angular/core';
import { PessoasService } from '../../../services/pessoas.service';
import { Pessoa } from '../../../models/pessoa';
import { FormGroup, FormControl } from '@angular/forms';
import { Response } from '@angular/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-pessoas',
  templateUrl: './listar-pessoas.component.html',
  styleUrls: ['./listar-pessoas.component.scss']
})
export class ListarPessoasComponent implements OnInit {

  constructor(
    private pessoasService: PessoasService,
    private router: Router
  ) { }

  private _pessoas: Array<Pessoa> = new Array<Pessoa>();

  private _pesquisarForm: FormGroup = new FormGroup({
    pesquisar: new FormControl()
  });

  ngOnInit() {
    this.pessoasService.getAll().subscribe( (res: Response) => {
      console.log(res);
      const jsonPessoas = <Array<Pessoa>>res.json();

      jsonPessoas.forEach( pessoa => {
        this.pessoas.push(pessoa);
      });
    });
  }

  public get pessoas(): Array<Pessoa> {
    return this._pessoas;
  }
  public set pessoas(value: Array<Pessoa>) {
    this._pessoas = value;
  }
  public get pesquisarForm(): FormGroup {
    return this._pesquisarForm;
  }
  public set pesquisarForm(v: FormGroup) {
    this._pesquisarForm = v;
  }
}
