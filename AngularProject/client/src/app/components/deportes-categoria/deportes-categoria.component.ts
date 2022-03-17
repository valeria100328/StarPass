<<<<<<< HEAD
import { Component,Input, OnInit } from '@angular/core';
=======
import { Component, Input, OnInit } from '@angular/core';
>>>>>>> 81090384203b2b7edfee32b9069c56db9e19da94

@Component({
  selector: 'app-deportes-categoria',
  templateUrl: './deportes-categoria.component.html',
  styleUrls: ['./deportes-categoria.component.css']
})
export class DeportesCategoriaComponent implements OnInit {
<<<<<<< HEAD
  @Input() navbarfiltro: any;
  @Input()  navbar: any;
  @Input() navbarCategoria: any;
=======
  @Input()  navbar: any;
  @Input() navbarCategoria: any;
  @Input() navbarfiltro: any;
>>>>>>> 81090384203b2b7edfee32b9069c56db9e19da94

  constructor() { }

  ngOnInit(): void {
  }

}
