import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { User } from 'src/app/models/user';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  validacionEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  constructor(private fb: FormBuilder,private router: Router) {
    this.loginForm= this.fb.group({
      usuario: ['',[Validators.required, Validators.pattern(this.validacionEmail)]],
      password: ['', Validators.required]
    })
    
   }

  ngOnInit(): void {
  }
  accesoUsuario (){
    console.log(this.loginForm);

    console.log(this.loginForm);
    console.log(this.loginForm.get('usuario')?.value);

        const data_usuario: User = {
            correo: this.loginForm.get('usuario')?.value,
            password: this.loginForm.get('password')?.value
        }

    this.router.navigate(['/']);

    Swal.fire({
      icon: 'success',
      title: 'Bienvenido a StarPass'
    })
    
    console.log(data_usuario);
  
}
}
