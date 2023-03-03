import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pelicula } from './pelicula';
import { Observable } from 'rxjs';
import { Actor } from './actor';
import { MensajeService } from './mensaje.service';

@Injectable({
  providedIn: 'root'
})
export class ImdbServiceService {
  seleccionID: Number;

  constructor(private http: HttpClient, public mensajeServicio: MensajeService) {
    this.seleccionID = -1;
  }

  getLista(url: string): Observable<Pelicula[]> {
    return this.http.get<Pelicula[]>(url);
  }

  verActores(url: string): Observable<Actor[]> | null {
    if (this.seleccionID != -1) {
      this.mensajeServicio.insertarMensaje('Info', 'Reparto cargado.', 'info');
      return this.http.get<Actor[]>(url);
    }
    else {
      this.mensajeServicio.insertarMensaje('Error', 'No has seleccionado ninguna película.', 'error');
      return null;
    }
  }
}