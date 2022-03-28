import { Component, OnInit } from '@angular/core';
import { AutenticacionService } from 'src/app/services/autenticacion.service';
import {FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-validar-cuenta',
  templateUrl: './validar-cuenta.component.html',
  styleUrls: ['./validar-cuenta.component.css']
})
export class ValidarCuentaComponent implements OnInit {
  loginUser:any

  constructor(private fb: FormBuilder,private router: Router, private autenticacion: AutenticacionService) { 
  this.loginUser = {}
  }

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
