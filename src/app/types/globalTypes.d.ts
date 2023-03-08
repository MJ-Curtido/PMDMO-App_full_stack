export {};

declare global {
  type Usuario = {
    _id: string;
    nombre: string;
    email: string;
    contrasenya: string;
    telefono: string;
  };

  type UsuarioConToken = {
    usuario: Usuario;
    token: string;
  };

  type Curso = {
    _id: string;
    nombre: string;
    descripcion: string;
    precio: number;
    creador: string;
  }

  type Compra = {
    _id: string;
    fecha: string;
    usuario: string;
    curso: string;
  }
}
