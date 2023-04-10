export class Cliente {
  constructor(
    public id_cliente: number,
    public nombre: string,
    public email: string,
    public telefono: string,
    public direccion: string,
    public id_usuario: number
  ){}
}