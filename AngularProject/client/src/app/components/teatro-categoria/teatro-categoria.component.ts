import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-teatro-categoria',
  templateUrl: './teatro-categoria.component.html',
  styleUrls: ['./teatro-categoria.component.css']
})
export class TeatroCategoriaComponent implements OnInit {
  @Input() navbarfiltro: any;
  @Input()  navbar: any;
  @Input() navbarCategoria: any;

  constructor() { }

  ngOnInit(): void {
  }

}
