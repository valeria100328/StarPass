import { Component, OnInit } from '@angular/core';
import { AutenticacionService } from 'src/app/services/autenticacion.service';

@Component({
  selector: 'app-validar-cuenta',
  templateUrl: './validar-cuenta.component.html',
  styleUrls: ['./validar-cuenta.component.css']
})
export class ValidarCuentaComponent implements OnInit {
  email = 'email'
  loginUser = {}

  constructor(autenticacion: AutenticacionService) { }

  ngOnInit(): void {
  }
}
