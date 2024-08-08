import { Component } from '@angular/core';
import { Factura } from 'src/app/models/Factura';
import { Cliente } from 'src/app/models/Cliente';
import { ProductoResponse } from 'src/app/models/ProductoResponse';
import { Producto } from 'src/app/models/Producto';
import { ItemFactura } from 'src/app/models/ItemFactura';
import { ClienteService } from 'src/app/services/cliente.service';
import { CategoriaService } from 'src/app/services/categoria.service';


@Component({
  selector: 'app-factura',
  templateUrl: './factura.component.html',
  styleUrls: ['./factura.component.css'],
})
export class FacturaComponent {
  constructor(private clienteService: ClienteService,
    private categoriaService: CategoriaService) { }
    cliente: Cliente | null = null;
  cedulaBusqueda: string = '';

  async buscarCliente(): Promise<void> {
    try {
      this.cliente = await this.clienteService.getClienteByCedula(this.cedulaBusqueda);
    } catch (error) {
      console.error('Error al obtener cliente:', error);
    }
  }

}
