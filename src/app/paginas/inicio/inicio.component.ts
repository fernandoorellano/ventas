import { Component } from '@angular/core';
import { environment } from '../../../environments/environment.development';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

  img_bano = environment.articulo_para_baño;
  img_utensillo  = environment.articulo_utensillo;
  img_tacho_metal = environment.articulo_tacho_metal;
  img_cesto_ropa = environment.articulo_cesto_ropa;
  img_organizador_zapatos = environment.articulo_organizador_zapatos;
  img_organizador_ropa = environment.articulo_organizador_ropa;
  img_organizador = environment.articulo_organizador;
  img_balde_mopa = environment.articulo_balde_mopa;
  img_spray_aceitero = environment.articulo_spray_aceitero;
  img_cesto_basura_chico = environment.articulo_cesto_basura_chico;
  img_copa_champain = environment.articulo_copa_champain;
  img_copa_lineal = environment.articulo_copa_lineal;
  img_plato_playo = environment.articulo_plato_playo;
  img_plato_playo_forjado = environment.articulo_plato_playo_forjado;
  img_nose = environment.articulo_nose;
  img_cesto_nose = environment.articulo_cesto_nose;
  img_cesto_ratan_contapa = environment.articulo_cesto_ratan_contapa;
  
}
