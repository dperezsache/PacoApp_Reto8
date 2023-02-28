import { Injectable } from '@angular/core';
import { Pelicula } from './pelicula';

@Injectable({
  providedIn: 'root'
})
export class IDBService {
  private db!: IDBDatabase;
  private callbacks:Function[] = [];
  public listadoFavoritas: Pelicula[] = [];

  constructor() { }

  registrar(callback:Function) {
    this.callbacks.push(callback);
  }

  avisar() {
    for(let callback of this.callbacks) {
      console.log(callback)
      callback();
    }
  }

  iniciarIndexedDB() {
    const peticion = indexedDB.open('PeliculasDB');

    peticion.onsuccess = () => {
      this.db = peticion.result;
      this.cargarPeliculas();
    }

    peticion.onupgradeneeded = () => {
      this.db = peticion.result;
      this.db.createObjectStore('favoritas', { keyPath: 'id' });
    }

    peticion.onerror = (err) => console.error(`Error de IndexedDB: ${peticion.error} ` + err);
  }

  existePelicula(pelicula: Pelicula) {
    let existe = false;
    const peticion = this.db.transaction('favoritas', 'readonly').objectStore('favoritas').getAll();
    
    peticion.onsuccess = () => {
      const listaPeliculas:Pelicula[] = peticion.result;
      
      for(let peli of listaPeliculas) {
        if(peli.id === pelicula.id) {
          console.info('La película a insertar ya existe');
          existe = true;
          break;
        }
      }

      if(!existe) {
        this.insercion(pelicula);
      }
    }
  }

  insercion(pelicula: Pelicula) {
    const peticion = this.db.transaction('favoritas', 'readwrite').objectStore('favoritas').add(pelicula);
    
    peticion.onsuccess = () => {
      console.info('Película añadida a IDB');
      this.cargarPeliculas();
    }
  }

  cargarPeliculas() {
    const peticion = this.db.transaction('favoritas', 'readonly')
      .objectStore('favoritas')
      .getAll();
    
    peticion.onsuccess = () => {
      this.listadoFavoritas = peticion.result;
      this.avisar();
    } 
  }
}
