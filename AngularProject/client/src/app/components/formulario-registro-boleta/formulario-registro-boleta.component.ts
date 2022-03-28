import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { Router, ActivatedRoute } from '@angular/router';
import { BoletaGeneral } from 'src/app/models/boletaGeneral';
import { BoletaGeneralService } from 'src/app/services/boleta-general.service';


@Component({
  selector: 'app-formulario-registro-boleta',
  templateUrl: './formulario-registro-boleta.component.html',
  styleUrls: ['./formulario-registro-boleta.component.css']
})
export class FormularioRegistroBoletaComponent implements OnInit {
  registroTicketshopForm: FormGroup;
  //Creamos nuestro atributo
  soloNumeros = /^([0-9])*$/;
  idDatBoletaGeneral: string| null



  constructor(private fb: FormBuilder, private router: Router, private _boletaGeneralServices: BoletaGeneralService, private idBoletaGeneralPath: ActivatedRoute) {
    this.registroTicketshopForm = this.fb.group({
      seccion: ['General',Validators.required],
      cantidad_unidad: ['1', [Validators.required, Validators.pattern(this.soloNumeros), Validators.min(1)]],
      servicio: ['2500', [Validators.required, Validators.pattern(this.soloNumeros), Validators.min(1)]],
      precio: ['750000', [Validators.required, Validators.pattern(this.soloNumeros), Validators.min(1)]],
    });
    //Guardamos el id
    this.idDatBoletaGeneral = this.idBoletaGeneralPath.snapshot.paramMap.get('id')
  }

    ngOnInit(): void {
      this.accionSolicitada()

    }

  //capturamos la informacion
    InfoRegistro() {
      console.log(this.registroTicketshopForm)
//Alimentar el JSON
      const data_boletaGeneral: BoletaGeneral ={
        seccion: this.registroTicketshopForm.get('seccion')?.value,
        cantidad_unidad: this.registroTicketshopForm.get('cantidad_unidad')?.value,
        servicio: this.registroTicketshopForm.get('servicio')?.value,
        precio: this.registroTicketshopForm.get('precio')?.value
      }

      if(this.idDatBoletaGeneral !== null){
        //Actualizar
      this._boletaGeneralServices.putBoletaGeneral(this.idDatBoletaGeneral, data_boletaGeneral).subscribe(data => {
        this.router.navigate(['/carritocompras']);
        Swal.fire({
          icon: 'success',
          title: '¡Cambio de la boleta general registrado exitosamente!',
        })

      }, error => {
        console.log(error)
      })
      }else{
        this._boletaGeneralServices.postBoletaGeneral(data_boletaGeneral).subscribe(data => {
          this.router.navigate(['/carritocompras']);
          Swal.fire({
            icon: 'success',
            title: '¡Boleta general registrada exitosamente! ',
          })

        }, error => {
          console.log(error)
        })

      }
      console.log(data_boletaGeneral)

      }


    //Actualizar  po medio de un ido crear
    accionSolicitada(){
      if(this.idDatBoletaGeneral !== null){
       //Alimenta el formulario con la base de datos
      this._boletaGeneralServices.getBoletaGeneral(this.idDatBoletaGeneral).subscribe(data => {
        //tenemos que llamar para alimentar el usuario
        this.registroTicketshopForm.setValue({
          seccion: data.seccion,
          cantidad_unidad: data.cantidad_unidad,
          servicio: data.servicioo,
          precio: data.precio
        })
      }, error => {

      })
      //devolvera la respuesta

    }

  }

}
