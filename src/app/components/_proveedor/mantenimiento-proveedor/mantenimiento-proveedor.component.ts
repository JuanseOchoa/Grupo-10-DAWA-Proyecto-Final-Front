import { Component } from '@angular/core';
import { Proveedor } from 'src/app/models/Proveedor';
import { ProveedorService } from 'src/app/services/proveedor.service';

@Component({
  selector: 'app-mantenimiento-proveedor',
  templateUrl: './mantenimiento-proveedor.component.html',
  styleUrls: ['./mantenimiento-proveedor.component.css']
})
export class MantenimientoProveedorComponent {
  proveedor: Proveedor | null = null;
  codigoBusqueda: string = '';

  constructor(private proveedorService: ProveedorService) { }
  async buscarProveedor(): Promise<void> {
    try {
      this.proveedor = await this.proveedorService.getProveedorByCode(this.codigoBusqueda);
    } catch (error) {
      console.error('Error al obtener Proveedor:', error);
    }
  }

  limpiarBusqueda(): void {
    this.proveedor = null;
    this.codigoBusqueda = '';
  }

  async editarProveedor(): Promise<void> {
    try {
      if (this.proveedor) {
        const updatedProveedor = await this.proveedorService.updateProveedor(this.proveedor);
        if (updatedProveedor) {
          this.proveedor = updatedProveedor; // Actualiza el proveedor con los datos actualizados
          console.log('Proveedor actualizado:', this.proveedor);
          this.limpiarBusqueda(); // O cualquier otra acción que desees después de eliminar
        }
      }
    } catch (error) {
      console.error('Error al actualizar el proveedor:', error);
    }
  }

  async eliminarProveedor(): Promise<void> {
    if (this.proveedor) {
      try {
        await this.proveedorService.eliminarProveedor(this.proveedor.id);
        console.log('Proveedor eliminado con éxito.');
        this.limpiarBusqueda(); // O cualquier otra acción que desees después de eliminar
      } catch (error) {
        console.error('Error al eliminar proveedor:', error);
      }
    }
  }
  

}
