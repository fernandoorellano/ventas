import { inject, Injectable } from '@angular/core';
import { addDoc, and, collection, collectionData, deleteDoc, doc, Firestore, orderBy, query, updateDoc } from '@angular/fire/firestore';
import { environment } from '../../environments/environment.development';
import { Articulo } from '../interfaces/articulo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  private readonly _firestore = inject(Firestore);
  private readonly _contanctCollec = collection(this._firestore, environment.fireNombreColeccion);
  articulos!: Articulo[];
  // articulosGuardados: any = [];

  constructor() {}

  getAll():Observable<Articulo[]>{
    const queryfn = query(this._contanctCollec);
    return collectionData(queryfn, {idField: 'id'}) as Observable<Articulo[]>
  }

  obtenerDatos(){
    this.getAll().subscribe(res => {
      // this.articulosGuardados = localStorage.getItem("articulos");
      this.articulos = res;
    });
  }

  crearDatos(articulo: any){
    const coleccionRef = collection(this._firestore, environment.fireNombreColeccion);
    addDoc(coleccionRef, articulo);
  }

  actualizarDatos(articulo: any){
    const coleccionRef = doc(this._firestore, environment.fireNombreColeccion, articulo.id);
    updateDoc(coleccionRef, articulo);
  }

  eliminarDatos(articulo: any){
    deleteDoc(doc(this._firestore, environment.fireNombreColeccion, articulo.id));
  }

}
