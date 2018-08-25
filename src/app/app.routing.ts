import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './signup/signup.component';
import { NucleoiconsComponent } from './components/nucleoicons/nucleoicons.component';
import { LandingComponent } from './landing/landing.component';
import { HomeComponent } from './home/home.component';
import { CadastrarProdutoComponent } from './produtos/cadastrar-produto/cadastrar-produto.component';
import { ListarProdutosComponent } from './produtos/listar-produtos/listar-produtos.component';
import { CadastrarCategoriaComponent } from './categorias/cadastrar-categoria/cadastrar-categoria.component';

const routes: Routes =[
    { path: 'home',                 component: HomeComponent },
    { path: 'user-profile',         component: ProfileComponent },
    { path: 'signup',               component: SignupComponent },
    { path: 'nucleoicons',          component: NucleoiconsComponent },
    { path: 'landing',              component: LandingComponent },
    { path: 'cadastrar-produto',    component: CadastrarProdutoComponent },
    { path: 'listar-produtos',      component: ListarProdutosComponent },
    { path: 'categorias',  component: CadastrarCategoriaComponent },

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
