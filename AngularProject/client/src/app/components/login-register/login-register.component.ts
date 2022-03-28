import { Component, OnInit } from '@angular/core';
import { AutenticacionService } from 'src/app/services/autenticacion.service';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.css']
})
export class LoginRegisterComponent implements OnInit {

    singnUpUser: any;
  loginRegisterForm:FormGroup;

  soloNumeros = /^([0-9])*$/;
  validacionEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

  constructor(private fb: FormBuilder,private router: Router, private autenticacion: AutenticacionService) { 
    this.singnUpUser = {}
    this.loginRegisterForm= this.fb.group({
    nombreCompleto: ['', Validators.required],
    apellidoCompleto: ['', Validators.required],
    ciudad:['', Validators.required],
    email: ['', [Validators.required, Validators.pattern(this.validacionEmail)]], 
    confirmaEmail: ['', [Validators.required, Validators.pattern(this.validacionEmail)]], 
    password: ['', Validators.required],
    confirmaPassword: ['', Validators.required],
    
  })
  }

  ngOnInit(): void {
  }
//peticion al backend de querer reguistrar al usuario
  signUp(){
    this.autenticacion.singnUpUser(this.singnUpUser)
    .subscribe(
      res => {
        console.log(res)
        //localstorage para guardar nuestros datos
        localStorage.setItem('token', res.jwtToken)
      },
      err => console.log(err)
    )
  }
  registroUsuario(){
    console.log(this.loginRegisterForm);

    this.router.navigate(['/']);

    Swal.fire({
      icon: 'success',
      title: 'Creaste tu cuenta StarPass',
      width: 600,
      padding: '3em',
      color: '#716add',
      background: '#010038',
      backdrop: `
        rgba(0,0,123,0.4)
        url("assets/img/kawaii-music.gif")
        left top
        no-repeat
      `
    })
    
  }
}