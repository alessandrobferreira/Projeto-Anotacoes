import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AnotacoesListComponent } from './components/anotacoes/anotacoes-list/anotacoes-list.component';
import { AnotacoesAddComponent } from './components/anotacoes/anotacoes-add/anotacoes-add.component';
import { CategoriaListComponent } from './components/categoria/categoria-list/categoria-list.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CategoriaAddComponent } from './components/categoria/categoria-add/categoria-add.component';
import { AnotacoesModalSaveComponent } from './components/anotacoes/anotacoes-modal-save/anotacoes-modal-save.component';
import { AnotacoesModalDeleteComponent } from './components/anotacoes/anotacoes-modal-delete/anotacoes-modal-delete.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    AnotacoesListComponent,
    AnotacoesAddComponent,
    CategoriaListComponent,
    CategoriaAddComponent,
    AnotacoesModalSaveComponent,
    AnotacoesModalDeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
