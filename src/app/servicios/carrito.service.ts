import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  articulosAgregado: any = [];
  cantidadArticulos = 0;
  articulosGuardados: any = [];

  constructor(private router: Router) { }

  agregarCarrito(articulo: any){
    this.articulosAgregado.push(articulo);
    //    if(localStorage.getItem("articulos")){
    //     const datos = localStorage.getItem("articulos");
    //     const articulos = JSON.parse(datos)
    //   console.log("Hay datos", articulos.length())
    // }
    // if(!localStorage.getItem("articulos")){
    //   console.log("NO Hay datos")
    // }

    const datosGuardados = localStorage.getItem("articulos");
    this.articulosGuardados = JSON.parse(datosGuardados);
    if(this.articulosGuardados){
      this.articulosGuardados.push(this.articulosAgregado);
      localStorage.setItem("articulos", JSON.stringify(this.articulosGuardados));
    }
    if(!this.articulosGuardados){
    localStorage.setItem("articulos", JSON.stringify(this.articulosAgregado));
    }
    
    this.cantidadArticulos = Object.keys(this.articulosAgregado).length;
    this.router.navigate(['carrito']);
  }

}
