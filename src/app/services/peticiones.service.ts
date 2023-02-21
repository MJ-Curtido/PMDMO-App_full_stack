import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeticionesService {

  constructor(private http: HttpClient) {
  }

  public iniciarSesion(email: string, contrasenya: string): Observable<UsuarioConToken> {
    return this.http.post<UsuarioConToken>('http://127.0.0.1:3000/usuarios/iniciarsesion', { email, contrasenya });
  }
}
