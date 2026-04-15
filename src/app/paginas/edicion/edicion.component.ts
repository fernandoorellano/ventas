import { Component } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { FirestoreService } from '../../servicios/firestore.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edicion',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './edicion.component.html',
  styleUrl: './edicion.component.css'
})
export class EdicionComponent {

    constructor(public fireServ: FirestoreService){}

    img_articulo = environment.articulo;
  
    ngOnInit(): void {
      this.fireServ.obtenerDatos();
    } 

}
