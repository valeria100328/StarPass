import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-evento-coldplay',
  templateUrl: './evento-coldplay.component.html',
  styleUrls: ['./evento-coldplay.component.css']
})
export class EventoColdplayComponent implements OnInit {
  @Input() navbarfiltro: any;
  @Input()  navbar: any;
  @Input() navbarCategoria: any;

  constructor() { }

  ngOnInit(): void {
  }

}
