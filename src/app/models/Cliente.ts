export class Cliente {
  id: number;
  cedula: string;
  nombre: string;
  direccion: string;
  telefono: string;
  correoElectronico: string;

  constructor(
    _id: number,
    _cedula: string,
    _nombre: string,
    _direccion: string,
    _telefono: string,
    _correoElectronico: string
  ) {
    this.id = _id;
    this.cedula = _cedula;
    this.nombre = _nombre;
    this.direccion = _direccion;
    this.telefono = _telefono;
    this.correoElectronico = _correoElectronico;
  }
}
