import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-festivales-categoria',
  templateUrl: './festivales-categoria.component.html',
  styleUrls: ['./festivales-categoria.component.css']
})
export class FestivalesCategoriaComponent implements OnInit {
  @Input() navbarfiltro: any;
  @Input()  navbar: any;
  @Input() navbarCategoria: any;

  constructor() { }

  ngOnInit(): void {
  }

}
