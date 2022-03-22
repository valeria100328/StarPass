import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.css']
})
export class LoginRegisterComponent implements OnInit {
  loginRegisterForm:FormGroup;

  soloNumeros = /^([0-9])*$/;
  validacionEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

  constructor(private fb: FormBuilder,private router: Router) { 
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
  registroUsuario(){
    console.log(this.loginRegisterForm);

    this.router.navigate(['/']);

    Swal.fire({
      icon: 'success',
      title: 'Creaste tu cuenta StarPass'
    })
    
  }
}
