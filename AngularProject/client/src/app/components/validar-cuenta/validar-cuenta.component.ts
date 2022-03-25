import { Component, OnInit } from '@angular/core';
import { AutenticacionService } from 'src/app/services/autenticacion.service';

@Component({
  selector: 'app-validar-cuenta',
  templateUrl: './validar-cuenta.component.html',
  styleUrls: ['./validar-cuenta.component.css']
})
export class ValidarCuentaComponent implements OnInit {
  loginUser = {}

  constructor(private autenticacion: AutenticacionService) { }

  ngOnInit(): void {
  }
  login(){
    this.autenticacion.loginUser(this.loginUser)
    .subscribe(
      res => {
      console.log(res)
      //Si tod esta correcto se nos va a guardar el localstorage
      localStorage.setItem('token', res.jwtToken)
    },
    err => console.log(err)
    )
  }
}
