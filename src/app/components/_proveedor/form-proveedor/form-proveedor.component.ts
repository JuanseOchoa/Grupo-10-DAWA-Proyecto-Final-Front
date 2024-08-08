import { Component } from '@angular/core';
import { Proveedor } from 'src/app/models/Proveedor';
import { ProveedorService } from 'src/app/services/proveedor.service';

@Component({
  selector: 'app-form-proveedor',
  templateUrl: './form-proveedor.component.html',
  styleUrls: ['./form-proveedor.component.css'],
})
export class FormProveedorComponent {
  proveedor: Proveedor = new Proveedor(0, '', '', '', '', ''); // Asegúrate de ajustar las propiedades
  camposHabilitados = false;

  constructor(private proveedorService: ProveedorService) {}

  async guardarProveedor() {
    try {
      const nuevoProveedor = await this.proveedorService.crearProveedor(this.proveedor);
      console.log('Proveedor guardado:', nuevoProveedor);

      // Limpiar los campos del formulario
      this.proveedor = new Proveedor(0, '', '', '', '', '');

      // Aquí podrías realizar alguna lógica adicional después de guardar y limpiar el proveedor
    } catch (error) {
      console.error('Error al guardar proveedor:', error);
    }
  }

  async editarProveedor() {
    try {
      const proveedorExistente = await this.proveedorService.getProveedorByCode(this.proveedor.codigo);
      this.proveedor = proveedorExistente;

      // Habilitar los campos de edición
      this.camposHabilitados = true;

      // Aquí podrías realizar alguna lógica adicional después de cargar el proveedor para editar
    } catch (error) {
      console.error('Error al cargar proveedor para editar:', error);
    }
  }
}
