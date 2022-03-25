import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-metodo-pago',
  templateUrl: './metodo-pago.component.html',
  styleUrls: ['./metodo-pago.component.css']
})
export class MetodoPagoComponent implements OnInit {
  apiUrl : 'https://www.efecty.com.co/web/?gclid=CjwKCAjwrfCRBhAXEiwAnkmKmeZrQcP24j9D_H1Nkpq-MZe4Cm2ESl1XjwA7CdAB_zTGBdpg2FfxxxoCLdEQAvD_BwE'

  constructor() { }

  ngOnInit(): void {
  }

}
