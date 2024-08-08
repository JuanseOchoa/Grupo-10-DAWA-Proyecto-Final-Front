import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/services/cliente.service';
import { Cliente } from 'src/app/models/Cliente';
@Component({
  selector: 'app-listar-cliente',
  templateUrl: './listar-cliente.component.html',
  styleUrls: ['./listar-cliente.component.css'],
})
export class ListarClienteComponent implements OnInit {
  lstClientes: Cliente[] = [];

  constructor(private clienteService: ClienteService) {}

  async ngOnInit(): Promise<void> {
    try {
      this.lstClientes = await this.clienteService.getClientes();
    } catch (error) {
      console.error('Error al obtener Clientes:', error);
    }
  }

}
