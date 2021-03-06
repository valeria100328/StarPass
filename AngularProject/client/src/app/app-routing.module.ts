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
import { CarritoComprasVipComponent } from './components/carrito-compras-vip/carrito-compras-vip.component';
import { FormularioPagoComponent } from './components/formulario-pago/formulario-pago.component';
import { DeportesCategoriaComponent } from './components/deportes-categoria/deportes-categoria.component';
import { FestivalesCategoriaComponent } from './components/festivales-categoria/festivales-categoria.component';
import { CulturalesCategoriaComponent } from './components/culturales-categoria/culturales-categoria.component';
import { FormularioRegistroVipComponent } from './components/formulario-registro-vip/formulario-registro-vip.component';





const routes: Routes = [
  {path:'', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'loginregistrer', component:LoginRegisterComponent},
  {path: 'sistema', component: NavbarComponent},
  {path: 'sistemanavbar', component: NavbarFiltroComponent},
  {path: 'conciertosCategorias', component: ConciertosCategoriaComponent},
  {path: 'deportesCategorias', component: DeportesCategoriaComponent},
  {path: 'teatroCategoria', component: TeatroCategoriaComponent},
  {path: 'eventoratablanca',component: EventoRataBlancaComponent},
  {path: 'eventodualipa', component: EventoDualipaComponent},
  {path:'formularioregistroboleta',component: FormularioRegistroBoletaComponent},
  {path: 'formularioregistrovip', component: FormularioRegistroVipComponent},
  {path: 'eventocoldplay', component: EventoColdplayComponent},
  {path: 'validarcuenta', component: ValidarCuentaComponent},
  { path: 'metodopago', component: MetodoPagoComponent},
  {path: 'carritocompras', component: CarritoComprasComponent},
  {path: 'carritocomprasvip', component: CarritoComprasVipComponent},
  {path: 'crear-compra', component: FormularioRegistroBoletaComponent},
  {path: 'editar-compra/:id', component: FormularioRegistroBoletaComponent},
  {path: 'formulariopago', component: FormularioPagoComponent},
  {path: 'deportescategorias', component: DeportesCategoriaComponent},
  {path: 'festivalescategoria', component: FestivalesCategoriaComponent},
  {path:'culturalescategoria', component: CulturalesCategoriaComponent},
  {path:'404', component:Pagina404Component},
  {path: '**',redirectTo: '404',pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
