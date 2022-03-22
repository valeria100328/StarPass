import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-deportes-categoria',
  templateUrl: './deportes-categoria.component.html',
  styleUrls: ['./deportes-categoria.component.css']
})
export class DeportesCategoriaComponent implements OnInit {
  @Input()  navbar: any;
  @Input() navbarCategoria: any;
  @Input() navbarfiltro: any;

  constructor() { }

  ngOnInit(): void {
  }

}
