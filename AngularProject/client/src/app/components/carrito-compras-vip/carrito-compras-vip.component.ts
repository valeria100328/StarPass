import { Component, OnInit } from '@angular/core';
import { BoletaVipService } from 'src/app/services/boleta-vip.service';
import { BoletaVip } from 'src/app/models/boletavip';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-carrito-compras-vip',
  templateUrl: './carrito-compras-vip.component.html',
  styleUrls: ['./carrito-compras-vip.component.css']
})
export class CarritoComprasVipComponent implements OnInit {
  data_BoletaVip = ""
  listaBoletaVip: BoletaVip[] = []

    constructor(private _boletaVipServices: BoletaVipService) { }

    ngOnInit(): void {
      this.obtenerBoletaVip();
    }

    //Haremos el servicio
    obtenerBoletaVip(){
      this._boletaVipServices.getBoletasVip().subscribe(data=> {
        console.log(data)
        this.listaBoletaVip = data
      }, error => {
        console.log(error)
      })



    }
    venderBoletaVip(id: any) {
      Swal.fire({
        title: '¿Desea continuar con el proceso de pago?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, deseo continuar'
      }).then((result) => {
        if (result.isConfirmed) {
          this._boletaVipServices.deleteBoletaVip(id).subscribe(data => {
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
          this.obtenerBoletaVip()
        }, error => {
          console.log(error)
      })
  }
      })
    }

}
