import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-evento-rata-blanca',
  templateUrl: './evento-rata-blanca.component.html',
  styleUrls: ['./evento-rata-blanca.component.css']
})
export class EventoRataBlancaComponent implements OnInit {
  @Input() navbarfiltro: any;
  @Input()  navbar: any;
  @Input() navbarCategoria: any;

  constructor() { }

  ngOnInit(): void {
  }

}
