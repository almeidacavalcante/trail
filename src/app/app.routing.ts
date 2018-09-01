import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { ProfileComponent } from './public/profile/profile.component';
import { SignupComponent } from './public/signup/signup.component';
import { NucleoiconsComponent } from './admin/components/nucleoicons/nucleoicons.component';
import { LandingComponent } from './public/landing/landing.component';
import { HomeComponent } from './public/home/home.component';
import { CadastrarProdutoComponent } from './admin/produtos/cadastrar-produto/cadastrar-produto.component';
import { ListarProdutosComponent } from './admin/produtos/listar-produtos/listar-produtos.component';
import { CadastrarCategoriaComponent } from './admin/categorias/cadastrar-categoria/cadastrar-categoria.component';
import { ListarPessoasComponent } from './admin/pessoas/listar-pessoas/listar-pessoas.component';
import { AcompanhamentoComponent } from './admin/pessoas/acompanhamento/acompanhamento.component';

const routes: Routes = [
    { path: 'home',                 component: HomeComponent },
    { path: 'user-profile',         component: ProfileComponent },
    { path: 'signup',               component: SignupComponent },
    { path: 'nucleoicons',          component: NucleoiconsComponent },
    { path: 'landing',              component: LandingComponent },
    { path: 'cadastrar-produto',    component: CadastrarProdutoComponent },
    { path: 'listar-produtos',      component: ListarProdutosComponent },
    { path: 'pessoas',              component: ListarPessoasComponent },
    { path: 'pessoas/:id',          component: AcompanhamentoComponent },
    { path: 'categorias',           component: CadastrarCategoriaComponent },

    { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes),
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
