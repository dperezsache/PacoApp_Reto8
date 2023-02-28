import { Component } from '@angular/core';
import { Pelicula } from '../pelicula';
import { ImdbServiceService } from '../imdb-service.service';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent {
  constrcutor(servicio : ImdbServiceService) {}

  ngOnInit(): void {
    
  }
}