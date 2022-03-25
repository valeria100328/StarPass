import { Component, OnInit } from '@angular/core';
import { BoletaGeneralService } from '../../services/boleta-general.service';
import { BoletaGeneral } from '../../models/boletaGeneral';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-carrito-compras',
  templateUrl: './carrito-compras.component.html',
  styleUrls: ['./carrito-compras.component.css']
})
export class CarritoComprasComponent implements OnInit {
 data_BoletaGeneral = ""
listaBoletaGeneral: BoletaGeneral[] = []

  constructor(private _boletaGeneralServices: BoletaGeneralService) { }

  ngOnInit(): void {
    this.obtenerBoletaGeneral();
  }

  //Haremos el servicio
  obtenerBoletaGeneral(){
    this._boletaGeneralServices.getBoletaGenerales().subscribe(data=> {
      console.log(data)
      this.listaBoletaGeneral = data
    }, error => {
      console.log(error)
    })



  }
  venderBoletaGeneral(id: any) {
    Swal.fire({
      title: '¿Desea continuar con el proceso de pago?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, deseo continuar'
    }).then((result) => {
      if (result.isConfirmed) {
        this._boletaGeneralServices.deleteBoletaGeneral(id).subscribe(data => {
          Swal.fire({
            title: 'Su boleta se esta preparando para el proceso de compra',
            text: 'Su boleta ha sido reservada exitosamente',
            width: 500,
            padding: '3em',
            color: '#716add',
            background: '#fff url(assets/img/trees.png)',
            backdrop: `
            rgba(0,0,124,0.6)
            url("assets/img/cute-kawaii.gif")
            left top
            no-repeat
            `
        })
        this.obtenerBoletaGeneral()
      }, error => {
        console.log(error)
    })
}
    })
  }
}