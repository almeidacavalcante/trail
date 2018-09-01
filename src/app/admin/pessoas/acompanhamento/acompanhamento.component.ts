import { Component, OnInit } from '@angular/core';
import { PessoasService } from '../../../services/pessoas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-acompanhamento',
  templateUrl: './acompanhamento.component.html',
  styleUrls: ['./acompanhamento.component.scss']
})
export class AcompanhamentoComponent implements OnInit {

  constructor(
    private pessoasService: PessoasService,
    private router: Router
  ) { }

  ngOnInit() {
    
  }
}
