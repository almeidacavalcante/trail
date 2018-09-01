import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { AppRoutingModule } from './app.routing';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { SignupComponent } from './signup/signup.component';
import { ProfileComponent } from './profile/profile.component';
import { NucleoiconsComponent } from './components/nucleoicons/nucleoicons.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeModule } from './home/home.module';
import { CadastrarProdutoComponent } from './produtos/cadastrar-produto/cadastrar-produto.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { ListarProdutosComponent } from './produtos/listar-produtos/listar-produtos.component';
import { ComponentsModule } from './components/components.module';
import { CadastrarCategoriaComponent } from './categorias/cadastrar-categoria/cadastrar-categoria.component';
import { FileUploadModule } from 'ng2-file-upload';
import { HttpModule } from '@angular/http';
import { CadastrarSeComponent } from './cadastrar-se/cadastrar-se.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    NavbarComponent,
    FooterComponent,
    SignupComponent,
    ProfileComponent,
    CadastrarProdutoComponent,
    ListarProdutosComponent,
    CadastrarCategoriaComponent,
    CadastrarSeComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    FormsModule,
    RouterModule,
    AppRoutingModule,
    HomeModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    ComponentsModule,
    FileUploadModule,
    HttpModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
