import { Routes } from '@angular/router';
import { CrearComponent } from './paginas/crear/crear.component';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { EdicionComponent } from './paginas/edicion/edicion.component';

export const routes: Routes = [
    {path: "",  redirectTo: "inicio", pathMatch: "full"},
    {path: "inicio", component: InicioComponent},
    {path: "crear", component: CrearComponent},
    {path: "edicion", component: EdicionComponent},
];
