import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { LoginRegisterComponent } from './components/login-register/login-register.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NavbarCategoriaComponent } from './components/navbar-categoria/navbar-categoria.component';
import { NavbarFiltroComponent } from './components/navbar-filtro/navbar-filtro.component';
import { ConciertosCategoriaComponent } from './components/conciertos-categoria/conciertos-categoria.component';
import { DeportesCategoriaComponent } from './components/deportes-categoria/deportes-categoria.component';
import { TeatroCategoriaComponent } from './components/teatro-categoria/teatro-categoria.component';
import { EventoRataBlancaComponent } from './components/evento-rata-blanca/evento-rata-blanca.component';
import { EventoDualipaComponent } from './components/evento-dualipa/evento-dualipa.component';
import { EventoColdplayComponent } from './components/evento-coldplay/evento-coldplay.component';
import { ValidarCuentaComponent } from './components/validar-cuenta/validar-cuenta.component';
import { RegistroCompraComponent } from './components/registro-compra/registro-compra.component';
import { CarritoComprasComponent } from './components/carrito-compras/carrito-compras.component';
import { MetodoPagoComponent } from './components/metodo-pago/metodo-pago.component';
import { FormularioPagoComponent } from './components/formulario-pago/formulario-pago.component';
import { TicketEventoComponent } from './components/ticket-evento/ticket-evento.component';
import { ProcesoCompraSeleccionComponent } from './components/proceso-compra-seleccion/proceso-compra-seleccion.component';
import { Pagina404Component } from './components/pagina404/pagina404.component';
import { FormularioRegistroBoletaComponent } from './components/formulario-registro-boleta/formulario-registro-boleta.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    LoginRegisterComponent,
    NavbarComponent,
    NavbarCategoriaComponent,
    NavbarFiltroComponent,
    ConciertosCategoriaComponent,
    DeportesCategoriaComponent,
    TeatroCategoriaComponent,
    EventoRataBlancaComponent,
    EventoDualipaComponent,
    EventoColdplayComponent,
    ValidarCuentaComponent,
    RegistroCompraComponent,
    CarritoComprasComponent,
    MetodoPagoComponent,
    FormularioPagoComponent,
    TicketEventoComponent,
    ProcesoCompraSeleccionComponent,
    Pagina404Component,
    FormularioRegistroBoletaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
