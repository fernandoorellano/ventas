import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../servicios/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  mensajeLogin = "";
  usuario = '';
  contrasena = '';

  constructor(public authServ: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.authServ.obtenerDatos();
  }

  onLogin(){
    this.authServ.getAll().subscribe(res => {
      if(this.usuario == res[0].usuario && this.contrasena == res[0].contrasena){
        
        this.router.navigate(['inicio']);
        this.authServ.login = true;
      }else
        if(this.usuario != res[0].usuario && this.contrasena != res[0].contrasena){
          this.mensajeLogin = "Usuario/contraseña incorrecto."
        }else
          if(this.usuario != res[0].usuario && this.contrasena == res[0].contrasena || this.usuario == res[0].usuario && this.contrasena != res[0].contrasena){
            this.mensajeLogin = "Usuario/contraseña incorrecto."
          }
    });
  }

}
