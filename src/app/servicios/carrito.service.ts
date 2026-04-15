import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  articulosAgregado: any = [];
  cantidadArticulos = 0;

  constructor(private router: Router) { }

  agregarCarrito(articulo: any){
    this.articulosAgregado.push(articulo);
    this.cantidadArticulos = Object.keys(this.articulosAgregado).length;
    this.router.navigate(['carrito']);
  }

}
