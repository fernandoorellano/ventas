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
  
  constructor(public carritoServ : CarritoService, private router: Router) {}

  confirmarCompra(articulos: any){
    let nombre: any = [];
    let precio: any = [];
    for (let index = 0; index < articulos.length; index++) {
      nombre.push(articulos[index].descripcion);
      precio.push(articulos[index].precio);
    }
    
    // let url = environment.inicioTextoUrl;
    let url = "https://wa.me/+5491168449947?text=Hola%20quiero%20comprar%20el%20articulo%20"+nombre;
    window.open(url, "_blank");
  }

  volver(){
    this.router.navigate(['inicio']);
  }

}
