export class ProductoResponse {
  id: number;
  nombre: string;
  descripcion: string;
  categoria: number;
  precioUnitario: number;
  stock: number;

  constructor(
    _idProducto: number,
    _nombre: string,
    _descripcion: string,
    _categoria: number,
    _precioUnitario: number,
    _stock: number
  ) {
    this.id = _idProducto;
    this.nombre = _nombre;
    this.descripcion = _descripcion;
    this.categoria = _categoria;
    this.precioUnitario = _precioUnitario;
    this.stock = _stock;
  }
}
