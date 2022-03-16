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
      nombres:['',Validators.required],
      seccion_bloque: ['',Validators.required],
      asientos_asignados: ['0', [Validators.required, Validators.pattern(this.soloNumeros), Validators.min(1)]],
    });
  }

    ngOnInit(): void {
    }
  
  
  //capturamos la informacion
     InfoRegistro() {
      console.log(this.registroTicketshopForm)
     }
}
