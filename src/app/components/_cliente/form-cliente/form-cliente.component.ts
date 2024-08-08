import { Component } from '@angular/core';
import { Cliente } from 'src/app/models/Cliente';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-form-cliente',
  templateUrl: './form-cliente.component.html',
  styleUrls: ['./form-cliente.component.css'],
})
export class FormClienteComponent {
  cliente: Cliente = new Cliente(0, '', '', '', '', '');
  camposHabilitados = false;


  constructor(private clienteService: ClienteService) {}

  async guardarCliente() {
    try {
      const nuevoCliente = await this.clienteService.crearCliente(this.cliente);
      console.log('Cliente guardado:', nuevoCliente);
  
      // Limpiar los campos del formulario
      this.cliente = new Cliente(0, '', '', '', '', '');
  
      // Aquí podrías realizar alguna lógica adicional después de guardar y limpiar el cliente
    } catch (error) {
      console.error('Error al guardar cliente:', error);
    }
  }
  async editarCliente() {
    try {
      const clienteExistente = await this.clienteService.getClienteByCedula(this.cliente.cedula);
      this.cliente = clienteExistente;

      // Habilitar los campos de edición
      this.camposHabilitados = true;

      // Aquí podrías realizar alguna lógica adicional después de cargar el cliente para editar
    } catch (error) {
      console.error('Error al cargar cliente para editar:', error);
    }
  }
  
  
}