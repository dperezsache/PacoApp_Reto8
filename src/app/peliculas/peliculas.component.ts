import { Component } from '@angular/core';
import { Pelicula } from '../pelicula';
import { PELICULAS } from '../mock-pelicula';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent {
  peliculas: Pelicula[] = []

  list(){
    this.peliculas = PELICULAS
  }

}