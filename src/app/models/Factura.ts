import { Cliente } from './Cliente';
import { ItemFactura } from './ItemFactura';

export class Factura {
  id: number;
  numeroFactura: string;
  fechaEmision: Date;
  cliente: Cliente;
  items: ItemFactura[];
  montoTotal: number;

  constructor(_idFactura: number, _numeroFactura: string, _fechaEmision: Date, _cliente: Cliente, _items: ItemFactura[], _montoTotal: number) {
    this.id = _idFactura;
    this.numeroFactura = _numeroFactura;
    this.fechaEmision = _fechaEmision;
    this.cliente = _cliente;
    this.items = _items;
    this.montoTotal = _montoTotal;
  }
}
