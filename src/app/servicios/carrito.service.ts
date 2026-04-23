import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Articulo } from '../interfaces/articulo';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  articulos = [];
  cantidadArticulos = 0;
  articulosLocalstorage = [];

  constructor(private router: Router) { }

  agregarCarrito(articulo: any){
    const datosGuardados = localStorage.getItem("articulos");
    this.articulosLocalstorage = JSON.parse(datosGuardados);

    this.articulosLocalstorage = JSON.parse(localStorage.getItem("articulos")) || [];
    this.articulosLocalstorage.push(articulo);
    localStorage.setItem("articulos", JSON.stringify(this.articulosLocalstorage));
    
    this.cantidadArticulos = Object.keys(this.articulos).length;
    this.router.navigate(['carrito']);
  }

  obtenerArticulos(){
    const datosGuardados = localStorage.getItem("articulos");
    this.articulosLocalstorage = JSON.parse(datosGuardados);
    if(this.articulosLocalstorage){
      this.cantidadArticulos = Object.keys(this.articulosLocalstorage).length;
    }
  }

}
