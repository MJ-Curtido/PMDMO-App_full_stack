import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InfoUsuarioService {
  private iniciado: Boolean;

  constructor() {
    this.iniciado = false;
  }

  getIniciado() {
    return this.iniciado;
  }

  setIniciado(iniciado: Boolean) {
    this.iniciado = iniciado;
  }
}
