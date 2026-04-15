import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { FirestoreService } from '../../servicios/firestore.service';

@Component({
  selector: 'app-crear',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './crear.component.html',
  styleUrl: './crear.component.css'
})
export class CrearComponent {

  regexNum = /0-9/g;

  crearForm= new FormGroup({
    imagen: new FormControl,
    descripcion: new FormControl('', [Validators.required, Validators.minLength(4), Validators.pattern('[a-zA-Z0-9 ]*')]),
    nombre: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z0-9 ]*')]),
    precio: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z0-9 ]*')])
  });

  mensajeCrear = "";

  constructor(public listadoFireServ : FirestoreService) {}

  crearArt(){
      if( this.crearForm.controls['descripcion']?.errors ){
        this.mensajeCrear = "Error en la descripcion.";
      }else
      if( this.crearForm.controls['nombre']?.errors ){
        this.mensajeCrear = "Error en el nombre."
      }else
      if( this.crearForm.controls['precio']?.errors ){
        this.mensajeCrear = "Error en el precio."
      }
      else{
        this.mensajeCrear = ''
      
      const nuevoArticulo: any = {
        imagen: this.crearForm.value.imagen,
        descripcion: this.crearForm.value.descripcion,
        nombre: this.crearForm.value.nombre,
        precio: this.crearForm.value.precio,
      }      
  
      this.listadoFireServ.crearDatos(nuevoArticulo)
      this.crearForm.reset();
    }
  }


}
