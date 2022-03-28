import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { BoletaVip } from 'src/app/models/boletavip';
import { BoletaVipService } from 'src/app/services/boleta-vip.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-formulario-registro-vip',
  templateUrl: './formulario-registro-vip.component.html',
  styleUrls: ['./formulario-registro-vip.component.css']
})
export class FormularioRegistroVipComponent implements OnInit {
  registroTicketshopFormVip: FormGroup;
  //Creamos nuestro atributo
  soloNumeros = /^([0-9])*$/;
  idDatBoletaVip: string| null



  constructor(private fb: FormBuilder, private router: Router, private _boletaVipServices: BoletaVipService, private idBoletaVipPath: ActivatedRoute) {
    this.registroTicketshopFormVip = this.fb.group({
      seccion: ['VIP',Validators.required],
      cantidad_unidad: ['1', [Validators.required, Validators.pattern(this.soloNumeros), Validators.min(1)]],
      servicio: ['5500', [Validators.required, Validators.pattern(this.soloNumeros), Validators.min(1)]],
      precio: ['300000', [Validators.required, Validators.pattern(this.soloNumeros), Validators.min(1)]],
    });
    //Guardamos el id
    this.idDatBoletaVip = this.idBoletaVipPath.snapshot.paramMap.get('id')
  }

    ngOnInit(): void {
      this.accionSolicitada()

    }

  //capturamos la informacion
    InfoRegistro() {
      console.log(this.registroTicketshopFormVip)
//Alimentar el JSON
      const data_boletaVip: BoletaVip ={
        seccion: this.registroTicketshopFormVip.get('seccion')?.value,
        cantidad_unidad: this.registroTicketshopFormVip.get('cantidad_unidad')?.value,
        servicio: this.registroTicketshopFormVip.get('servicio')?.value,
        precio: this.registroTicketshopFormVip.get('precio')?.value
      }

      if(this.idDatBoletaVip !== null){
        //Actualizar
      this._boletaVipServices.putBoletaVip(this.idDatBoletaVip, data_boletaVip).subscribe(data => {
        this.router.navigate(['/carritocomprasvip']);
        Swal.fire({
          icon: 'success',
          title: 'Cambio registrado de la boleta general exitosamente',
        })

      }, error => {
        console.log(error)
      })
      }else{
        this._boletaVipServices.postBoletaVip(data_boletaVip).subscribe(data => {
          this.router.navigate(['/carritocomprasvip']);
          Swal.fire({
            icon: 'success',
            title: 'Cambio registrado exitosamente de la boleta general',
          })

        }, error => {
          console.log(error)
        })

      }
      console.log(data_boletaVip)

      }


    //Actualizar  po medio de un ido crear
    accionSolicitada(){
      if(this.idDatBoletaVip !== null){
       //Alimenta el formulario con la base de datos
      this._boletaVipServices.getBoletaVip(this.idDatBoletaVip).subscribe(data => {
        //tenemos que llamar para alimentar el usuario
        this.registroTicketshopFormVip.setValue({
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
