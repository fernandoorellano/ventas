import { Component } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { FirestoreService } from '../../servicios/firestore.service';
import { CommonModule } from '@angular/common';
import { CarritoService } from '../../servicios/carrito.service';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

  constructor(public fireServ: FirestoreService, public carritoServ: CarritoService){}

  img_articulo = environment.articulo;

  ngOnInit(): void {
    this.fireServ.obtenerDatos();
  }
  
}
