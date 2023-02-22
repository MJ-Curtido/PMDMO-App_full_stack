import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InfoUsuarioService {
  constructor() {
  }

  getToken(): String | null  {
    return localStorage.getItem('token');
  }

  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  removeToken(): void {
    localStorage.removeItem('token');
  }

  // getUsuario() {
  //   return localStorage.getItem('usuario');
  // }
}
