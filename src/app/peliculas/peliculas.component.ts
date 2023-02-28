import { Component, OnInit } from '@angular/core';
import { Pelicula } from '../pelicula';
import { ImdbServiceService } from '../imdb-service.service';


@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})

export class PeliculasComponent implements OnInit{

  peliculas: Pelicula[] = []
  //movie: any[] =Peliculas.items;
  //public items: any[] =Peliculas.items;
  
  constructor(public servicio : ImdbServiceService) {
    console.log('llego')
  }

  ngOnInit(): void {
    this.getPeliculas()
  }
  getPeliculas(): void {
    this.servicio.getPeliculas()
    .subscribe(peliculas => this.peliculas = peliculas);
  }

  
}