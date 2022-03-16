import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NavbarFiltroComponent } from './components/navbar-filtro/navbar-filtro.component';
import { Pagina404Component } from './components/pagina404/pagina404.component';
import { CarritoComprasComponent } from './components/carrito-compras/carrito-compras.component';
import { FormularioPagoComponent } from './components/formulario-pago/formulario-pago.component';
const routes: Routes = [
  {path:'', component: HomeComponent},
  {path: 'sistema', component: NavbarComponent},
  {path: 'sistemanavbar', component: NavbarFiltroComponent},
  {path:'formulariopago', component: FormularioPagoComponent},
  {path: 'carritocompras',component:CarritoComprasComponent},
  {path:'404', component:Pagina404Component},
  {path: '**',redirectTo: '404',pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
