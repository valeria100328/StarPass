import {Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';






@Component({
  selector: 'app-formulario-registro-boleta',
  templateUrl: './formulario-registro-boleta.component.html',
  styleUrls: ['./formulario-registro-boleta.component.css']
})
export class FormularioRegistroBoletaComponent implements OnInit {
  registroTicketshopForm: FormGroup;
  //Creamos nuestro atributo
  soloNumeros = /^([0-9])*$/;
  
  
  
  constructor(private fb: FormBuilder, private router: Router) {
    this.registroTicketshopForm = this.fb.group({
      seccion: ['',Validators.required],
      cantidad_unidad: ['0', [Validators.required, Validators.pattern(this.soloNumeros), Validators.min(1)]],
      servicio: ['0', [Validators.required, Validators.pattern(this.soloNumeros), Validators.min(1)]],
      precio: ['0', [Validators.required, Validators.pattern(this.soloNumeros), Validators.min(1)]],
    });
  }

    ngOnInit(): void {
    }

  //capturamos la informacion
    InfoRegistro() {
      console.log(this.registroTicketshopForm)
    }


  }

