import { Component } from '@angular/core';
import { Mensaje } from '../mensaje';

@Component({
  selector: 'app-mensajes',
  templateUrl: './mensajes.component.html',
  styleUrls: ['./mensajes.component.css']
})
export class MensajesComponent {
  mensajes: Mensaje[] = [];

  insertarMensaje(titulo: string, descripcion: string, tipo: 'info' | 'exito' | 'aviso' | 'error') {
    this.mensajes.push({titulo, descripcion, tipo});
  }

  limpiarMensajes() {
    this.mensajes = [];
  }

  mensajeExito() {
    this.insertarMensaje('Exito', 'Mensaje insertado', 'exito');
  }

  mensajeError() {
    this.insertarMensaje('Error', 'Mensaje insertado', 'error');
  }

  mensajeAviso() {
    this.insertarMensaje('Aviso', 'Mensaje insertado', 'aviso');
  }

  mensajeInfo() {
    this.insertarMensaje('Info', 'Mensaje insertado', 'info');
  }
}
