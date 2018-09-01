import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LandingComponent } from './public/landing/landing.component';
import { AppRoutingModule } from './app.routing';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { SignupComponent } from './public/signup/signup.component';
import { ProfileComponent } from './public/profile/profile.component';
import { NucleoiconsComponent } from './admin/components/nucleoicons/nucleoicons.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeModule } from './public/home/home.module';
import { CadastrarProdutoComponent } from './admin/produtos/cadastrar-produto/cadastrar-produto.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { ListarProdutosComponent } from './admin/produtos/listar-produtos/listar-produtos.component';
import { ComponentsModule } from './admin/components/components.module';
import { CadastrarCategoriaComponent } from './admin/categorias/cadastrar-categoria/cadastrar-categoria.component';
import { FileUploadModule } from 'ng2-file-upload';
import { HttpModule } from '@angular/http';
import { CadastrarSeComponent } from './public/cadastrar-se/cadastrar-se.component';

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
