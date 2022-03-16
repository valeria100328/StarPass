import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NavbarFiltroComponent } from './components/navbar-filtro/navbar-filtro.component';
import { Pagina404Component } from './components/pagina404/pagina404.component';
import {ConciertosCategoriaComponent}from './components/conciertos-categoria/conciertos-categoria.component'
import { TeatroCategoriaComponent } from './components/teatro-categoria/teatro-categoria.component';
import { FormularioRegistroBoletaComponent } from './components/formulario-registro-boleta/formulario-registro-boleta.component';
import { LoginComponent } from './components/login/login.component';
import { LoginRegisterComponent } from './components/login-register/login-register.component';
import { EventoDualipaComponent } from './components/evento-dualipa/evento-dualipa.component';
import { EventoRataBlancaComponent } from './components/evento-rata-blanca/evento-rata-blanca.component';
import { EventoColdplayComponent } from './components/evento-coldplay/evento-coldplay.component';
import { ValidarCuentaComponent } from './components/validar-cuenta/validar-cuenta.component';
import { MetodoPagoComponent } from './components/metodo-pago/metodo-pago.component';
import { CarritoComprasComponent } from './components/carrito-compras/carrito-compras.component';
import { FormularioPagoComponent } from './components/formulario-pago/formulario-pago.component';
import { DeportesCategoriaComponent } from './components/deportes-categoria/deportes-categoria.component';




const routes: Routes = [
  {path:'', component: HomeComponent},
  {path: 'sistema', component: NavbarComponent},
  {path: 'sistemanavbar', component: NavbarFiltroComponent},
  {path: 'conciertosCategorias', component: ConciertosCategoriaComponent},
  {path: 'deportesCategorias', component: DeportesCategoriaComponent},
  {path: 'teatroCategoria', component: TeatroCategoriaComponent},
  {path:'formularioregistroboleta',component: FormularioRegistroBoletaComponent},
  {path: 'login', component: LoginComponent},
  {path: 'loginregistrer', component:LoginRegisterComponent},
  {path: 'eventodualipa', component: EventoDualipaComponent},
  {path: 'eventoratablanca',component: EventoRataBlancaComponent},
  {path: 'eventocoldplay', component: EventoColdplayComponent},
  {path: 'validarcuenta', component: ValidarCuentaComponent},
  { path: 'metodopago', component: MetodoPagoComponent},
  {path: 'carritocompras', component: CarritoComprasComponent},
  {path: 'formulariopago', component: FormularioPagoComponent},
  {path:'404', component:Pagina404Component},
  {path: '**',redirectTo: '404',pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
