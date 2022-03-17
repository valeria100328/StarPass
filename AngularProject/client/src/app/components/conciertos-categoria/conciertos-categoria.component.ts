import { Component, Input, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
Swal

@Component({
  selector: 'app-conciertos-categoria',
  templateUrl: './conciertos-categoria.component.html',
  styleUrls: ['./conciertos-categoria.component.css']
})
export class ConciertosCategoriaComponent implements OnInit {
  @Input()  navbar: any;
  @Input() navbarCategoria: any;
  @Input() navbarfiltro: any;

  constructor() { }

  ngOnInit(): void {
  }
  en_contruccion() {
    Swal.fire({
        imageUrl: '../../../assets/img/boton-x.png',
        imageWidth: 150,
        imageHeight: 150,
        title: '¡EVENTO CANCELADO!',
        confirmButtonColor: '#990000',
        footer: '<a href="">Why do I have this issue?</a>'
    })
}
}
