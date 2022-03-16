import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NavbarFiltroComponent } from './components/navbar-filtro/navbar-filtro.component';
import { Pagina404Component } from './components/pagina404/pagina404.component';
import {ConciertosCategoriaComponent}from './components/conciertos-categoria/conciertos-categoria.component'
import { TeatroCategoriaComponent } from './components/teatro-categoria/teatro-categoria.component';
import { FormularioRegistroBoletaComponent } from './components/formulario-registro-boleta/formulario-registro-boleta.component';




const routes: Routes = [
  {path:'', component: HomeComponent},
  {path: 'sistema', component: NavbarComponent},
  {path: 'sistemanavbar', component: NavbarFiltroComponent},
  {path: 'conciertosCategoria', component: ConciertosCategoriaComponent},
  {path: 'teatroCategoria', component: TeatroCategoriaComponent},
  {path:'formularioregistroboleta',component: FormularioRegistroBoletaComponent},
  {path:'404', component:Pagina404Component},
  {path: '**',redirectTo: '404',pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
