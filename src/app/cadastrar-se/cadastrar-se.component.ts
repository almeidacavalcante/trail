import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-cadastrar-se',
  templateUrl: './cadastrar-se.component.html',
  styleUrls: ['./cadastrar-se.component.scss']
})
export class CadastrarSeComponent implements OnInit {

  closeResult = '';

  private _cadastroForm: FormGroup = new FormGroup({
    email: new FormControl(null, Validators.required),
    senhaGroup: new FormGroup({
      senha: new FormControl(null, Validators.required),
      senhaConfirmacao: new FormControl(null, Validators.required),
    }),
    cpf: new FormControl(null, Validators.required),
    nome: new FormControl(null, Validators.required),
    dataNascimento: new FormControl(),
    telefone: new FormControl(),
  });

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  /**
   * cadastrarPessoa
   */
  public cadastrarPessoa() {
    console.log(this._cadastroForm);
    this.modalService.dismissAll();
    this.cadastroForm.reset();
  }

  /**
   * REACTIVE FORM GETTERS
   */

  public get email(): FormControl {
    return this._cadastroForm.get('email') as FormControl;
  }
  public get senhaGroup(): FormGroup {
    return this._cadastroForm.get('senhaGroup') as FormGroup;
  }
  public get senha(): FormControl {
    return this.senhaGroup.get('senha') as FormControl;
  }
  public get senhaConfirmacao(): FormControl {
    return this.senhaGroup.get('senhaConfirmacao') as FormControl;
  }
  public get cpf(): FormControl {
    return this._cadastroForm.get('cpf') as FormControl;
  }
  public get nome(): FormControl {
    return this._cadastroForm.get('nome') as FormControl;
  }
  public get dataNascimento(): FormControl {
    return this._cadastroForm.get('dataNascimento') as FormControl;
  }
  public get telefone(): FormControl {
    return this._cadastroForm.get('telefone') as FormControl;
  }
  public get cadastroForm(): FormGroup {
    return this._cadastroForm;
  }
  public set cadastroForm(value: FormGroup) {
    this._cadastroForm = value;
  }
}
