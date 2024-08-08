import { Component } from '@angular/core';
import { Cliente } from 'src/app/models/Cliente';
import { ClienteService } from 'src/app/services/cliente.service';
@Component({
  selector: 'app-mantenimiento-cliente',
  templateUrl: './mantenimiento-cliente.component.html',
  styleUrls: ['./mantenimiento-cliente.component.css']
})
export class MantenimientoClienteComponent {
  cliente: Cliente | null = null;
  cedulaBusqueda: string = '';

  constructor(private clienteService: ClienteService) { }

  async buscarCliente(): Promise<void> {
    try {
      this.cliente = await this.clienteService.getClienteByCedula(this.cedulaBusqueda);
    } catch (error) {
      console.error('Error al obtener cliente:', error);
    }
  }

  limpiarBusqueda(): void {
    this.cliente = null;
    this.cedulaBusqueda = '';
  }

 


  async editarCliente(): Promise<void> {
    if (this.cliente) {
        try {
            // Realiza la solicitud al servicio para actualizar el cliente
            const updatedCliente = await this.clienteService.actualizarCliente(this.cliente);

            if (updatedCliente) {
                console.log('Cliente actualizado con éxito.');
                this.limpiarBusqueda(); // O cualquier otra acción que desees después de eliminar
                // Realiza cualquier acción adicional después de actualizar
            } else {
                console.log('No se pudo actualizar el cliente.');
            }
        } catch (error) {
            console.error('Error al actualizar cliente:', error);
        }
    }
}

  async eliminarCliente(): Promise<void> {
    if (this.cliente) {
      try {
        await this.clienteService.eliminarCliente(this.cliente.id);
        console.log('Cliente eliminado con éxito.');
        this.limpiarBusqueda(); // O cualquier otra acción que desees después de eliminar
      } catch (error) {
        console.error('Error al eliminar cliente:', error);
      }
    }
  }
  
}
