export class Usuario {
  id: number;
  nombreUsuario: string;
  contraseña: string;
  correoElectronico: string;
  nombre: string;
  apellido: string;

  constructor(
    _idUsuario: number,
    _nombreUsuario: string,
    _contraseña: string,
    _correoElectronico: string,
    _nombre: string,
    _apellido: string
  ) {
    this.id = _idUsuario;
    this.nombreUsuario = _nombreUsuario;
    this.contraseña = _contraseña;
    this.correoElectronico = _correoElectronico;
    this.nombre = _nombre;
    this.apellido = _apellido;
  }


}
