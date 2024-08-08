export class Categoria {
  id: number;
  nombre: string;
  descripcion: string;

  constructor(_idCategoria: number, _nombre: string, _descripcion: string) {
    this.id = _idCategoria;
    this.nombre = _nombre;
    this.descripcion = _descripcion;
  }
}
