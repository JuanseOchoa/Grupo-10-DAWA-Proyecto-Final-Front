import { Injectable } from '@angular/core';
import { Cliente } from '../models/Cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private apiUrl = 'https://localhost:7226/api';

  constructor() {}

  async getClientes(): Promise<Cliente[]> {
    try {
      const response = await fetch(`${this.apiUrl}/cliente`);
      const clientes = await response.json();
      return clientes;
    } catch (error) {
      console.error('Error obteniendo clientes:', error);
      throw error;
    }
  }

  async getClienteByCedula(cedula: string): Promise<Cliente> {
    try {
      const response = await fetch(`${this.apiUrl}/cliente/cedula/${cedula}`);
      const cliente = await response.json();
      return cliente;
    } catch (error) {
      console.error('Error obteniendo cliente:', error);
      throw error;
    }
  }


  async actualizarCliente(cliente: Cliente): Promise<Cliente | null> {
    try {
        const response = await fetch(`${this.apiUrl}/Cliente/${cliente.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(cliente)
        });

        if (response.ok) {
            const updatedCliente = await response.json();
            return updatedCliente;
        } else {
            return null;
        }
    } catch (error) {
        console.error('Error actualizando cliente:', error);
        throw error;
    }
}



  async eliminarCliente(id: number): Promise<void> {
    try {
      const response = await fetch(`${this.apiUrl}/Cliente/${id}`, {
        method: 'DELETE'
      });
  
      if (response.ok) {
        console.log('Cliente eliminado con éxito desde el servidor.');
      } else {
        console.error('Error al eliminar cliente desde el servidor:', response.statusText);
        throw new Error(response.statusText);
      }
    } catch (error) {
      console.error('Error en la petición para eliminar cliente:', error);
      throw error;
    }
  }
async crearCliente(cliente: Cliente): Promise<Cliente> {
  try {
    const response = await fetch(`${this.apiUrl}/Cliente`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(cliente)
    });

    if (response.ok) {
      const nuevoCliente = await response.json();
      return nuevoCliente;
    } else {
      throw new Error('Error al crear cliente');
    }
  } catch (error) {
    console.error('Error al crear cliente:', error);
    throw error;
  }

  
}
  
}