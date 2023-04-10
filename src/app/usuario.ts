export class Usuario {
  constructor(
    public id_usuario: number,
    public nombre_usuario: string,
    public apellidos_usuario: string,
    public rol: string,
    public rut: string,
    public email: string,
    public contrasena: string
  ) {}
}