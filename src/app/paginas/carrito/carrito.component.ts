import { Component } from '@angular/core';
import { CarritoService } from '../../servicios/carrito.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { environment } from '../../../environments/environment.development';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-carrito',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.css'
})
export class CarritoComponent {

  img_articulo = environment.articulo;
  articulosGuardados: any = [];
  
  constructor(public carritoServ : CarritoService, private router: Router) {}

  confirmarCompra(){
    this.obtenerDatos();
    let nombre: any = [];
    let precio: any = [];
    for (let index = 0; index < this.articulosGuardados.length; index++) {
      nombre.push(this.articulosGuardados[index].descripcion+".%0A");
      precio.push(this.articulosGuardados[index].precio);
    }
    if(this.articulosGuardados.length == 1){
      let url = "https://wa.me/+5491168449947?text=Hola!%20Quiero%20info%20del%20articulo%20"+nombre;
      window.open(url, "_blank");
    }else{
      let url = "https://wa.me/+5491168449947?text=Hola!%20Quiero%20info%20de%20los%20articulos%0A"+nombre;
      window.open(url, "_blank");
    }
  }

  volver(){
    this.router.navigate(['inicio']);
  }

  eliminar(index: any){
    this.articulosGuardados.splice(index, 1);
    localStorage.clear();
    localStorage.setItem("articulos", JSON.stringify(this.articulosGuardados));
    this.carritoServ.cantidadArticulos = Object.keys(this.articulosGuardados).length;
  }

  ngOnInit(): void {
    this.obtenerDatos();
  }

  obtenerDatos(){
    const datosGuardados = localStorage.getItem("articulos");
    this.articulosGuardados = JSON.parse(datosGuardados);
  }

}
