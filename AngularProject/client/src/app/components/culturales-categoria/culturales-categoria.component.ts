import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-culturales-categoria',
  templateUrl: './culturales-categoria.component.html',
  styleUrls: ['./culturales-categoria.component.css']
})
export class CulturalesCategoriaComponent implements OnInit {
  @Input() navbarfiltro: any;
  @Input()  navbar: any;
  @Input() navbarCategoria: any;

  constructor() { }

  ngOnInit(): void {
  }

}
