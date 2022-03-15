import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar-filtro',
  templateUrl: './navbar-filtro.component.html',
  styleUrls: ['./navbar-filtro.component.css']
})
export class NavbarFiltroComponent implements OnInit {
  @Input() navbarfiltro: any;

  constructor() { }

  ngOnInit(): void {
  }

}
