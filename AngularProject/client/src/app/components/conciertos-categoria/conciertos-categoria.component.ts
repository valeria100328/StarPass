import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-conciertos-categoria',
  templateUrl: './conciertos-categoria.component.html',
  styleUrls: ['./conciertos-categoria.component.css']
})
export class ConciertosCategoriaComponent implements OnInit {
  @Input() navbarfiltro: any;
  @Input()  navbar: any;
  @Input() navbarCategoria: any;

  constructor() { }

  ngOnInit(): void {
  }

}
