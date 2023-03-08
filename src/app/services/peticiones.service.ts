import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PeticionesService {
  constructor(private http: HttpClient) {}

  iniciarSesion(
    email: string,
    contrasenya: string
  ): Observable<UsuarioConToken> {
    return this.http.post<UsuarioConToken>(
      'http://127.0.0.1:3000/usuarios/iniciarsesion',
      { email, contrasenya }
    );
  }

  registro(
    nombre: string,
    email: string,
    contrasenya: string,
    telefono: string
  ): Observable<UsuarioConToken> {
    return this.http.post<UsuarioConToken>(
      'http://127.0.0.1:3000/usuarios/registro',
      { nombre, email, contrasenya, telefono }
    );
  }

  cerrarSesion(): Observable<any> {
    return this.http.get<any>('http://127.0.0.1:3000/usuarios/cerrarsesion');
  }

  crearCurso(
    nombre: string,
    descripcion: string,
    precio: number
  ): Observable<Curso> {
    return this.http.post<Curso>(
      'http://127.0.0.1:3000/cursos/crear',
      { nombre, descripcion, precio }
    );
  }

  obtenerCursos(): Observable<Curso[]> {
    return this.http.get<Curso[]>('http://127.0.0.1:3000/compras/nocomprado');
  }

  obtenerCursosComprados(): Observable<Curso[]> {
    return this.http.get<Curso[]>('http://127.0.0.1:3000/compras/yo');
  }

  obtenerMisCursos(): Observable<Curso[]> {
    return this.http.get<Curso[]>('http://127.0.0.1:3000/cursos/miscursos');
  }

  eliminarCurso(
    id: string
  ): Observable<any> {
    return this.http.delete<any>(
      'http://127.0.0.1:3000/cursos/' + id
    );
  }

  comprarCurso(
    id: string
  ): Observable<Compra> {
    return this.http.post<Compra>(
      'http://127.0.0.1:3000/compras/comprar',
      { id }
    );
  }
}
