import { AnotacoesListComponent } from './components/anotacoes/anotacoes-list/anotacoes-list.component';
import { CategoriaListComponent } from './components/categoria/categoria-list/categoria-list.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnotacoesAddComponent } from './components/anotacoes/anotacoes-add/anotacoes-add.component';
import { CategoriaAddComponent } from './components/categoria/categoria-add/categoria-add.component';

const routes: Routes = [

  { path: 'home', component: HomeComponent},

  { path: 'categorias', component: CategoriaListComponent},
  { path: 'categorias-add', component: CategoriaAddComponent},
  { path: 'categorias-update/:id', component: CategoriaAddComponent},

  { path: 'notas', component: AnotacoesListComponent},
  { path: 'notas-add', component: AnotacoesAddComponent},
  { path: 'notas-update/:id', component: AnotacoesAddComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
