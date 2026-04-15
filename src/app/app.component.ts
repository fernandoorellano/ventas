import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { FooterComponent } from'./componentes/footer/footer.component';
import { FirestoreService } from './servicios/firestore.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavbarComponent, InicioComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ventas';

  constructor(public fireServ: FirestoreService){}

  ngOnInit(): void {
    this.fireServ.obtenerDatos();
  } 
  
}
