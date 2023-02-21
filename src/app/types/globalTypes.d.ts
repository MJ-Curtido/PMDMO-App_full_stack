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
}
