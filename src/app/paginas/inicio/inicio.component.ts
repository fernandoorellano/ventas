import { Component } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { FirestoreService } from '../../servicios/firestore.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

  constructor(public fireServ: FirestoreService){}

  img_articulo = environment.articulo;

  ngOnInit(): void {
    this.fireServ.obtenerDatos();
  } 
  
}
