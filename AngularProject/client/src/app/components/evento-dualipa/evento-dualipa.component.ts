import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-evento-dualipa',
  templateUrl: './evento-dualipa.component.html',
  styleUrls: ['./evento-dualipa.component.css']
})
export class EventoDualipaComponent implements OnInit {
  @Input() navbarfiltro: any;
  @Input()  navbar: any;
  @Input() navbarCategoria: any;

  constructor() { }

  ngOnInit(): void {
  }

}
