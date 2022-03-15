import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar-categoria',
  templateUrl: './navbar-categoria.component.html',
  styleUrls: ['./navbar-categoria.component.css']
})
export class NavbarCategoriaComponent implements OnInit {
  //Dinamica de que cambien el titulo
  @Input() navbarCategoria: any;

  constructor() { }

  ngOnInit(): void {
  }

}
