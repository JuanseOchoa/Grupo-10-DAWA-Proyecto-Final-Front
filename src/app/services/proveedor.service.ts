import { Injectable } from '@angular/core';
import { Proveedor } from '../models/Proveedor';

@Injectable({
  providedIn: 'root'
})
export class ProveedorService {

  private apiUrl = 'https://localhost:7226/api';

  constructor() {}

  async getProveedores(): Promise<Proveedor[]> {
    try {
      const response = await fetch(`${this.apiUrl}/proveedor`);
      const proveedores = await response.json();
      return proveedores;
    } catch (error) {
      console.error('Error obteniendo proveedores:', error);
      throw error;
    }
  }

  async getProveedorByCode(code: string): Promise<Proveedor> {
    try {
      const response = await fetch(`${this.apiUrl}/proveedor/codigo/${code}`);
      const proveedor = await response.json();
      return proveedor;
    } catch (error) {
      console.error('Error obteniendo proveedor:', error);
      throw error;
    }
  }


  async crearProveedor(proveedor: Proveedor): Promise<Proveedor> {
    try {
      const response = await fetch(`${this.apiUrl}/Proveedor`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(proveedor)
      });

      if (response.ok) {
        const nuevoProveedor = await response.json();
        return nuevoProveedor;
      } else {
        throw new Error('Error al crear el proveedor.');
      }
    } catch (error) {
      console.error('Error al crear proveedor:', error);
      throw error;
    }
  }

  async updateProveedor(proveedor: Proveedor): Promise<Proveedor> {
    try {
      const response = await fetch(`${this.apiUrl}/Proveedor/${proveedor.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(proveedor)
      });

      if (response.ok) {
        const updatedProveedor = await response.json();
        return updatedProveedor;
      } else {
        throw new Error('Error al actualizar el proveedor.');
      }
    } catch (error) {
      console.error('Error al actualizar proveedor:', error);
      throw error;
    }
  }

  async eliminarProveedor(id: number): Promise<void> {
    try {
      const response = await fetch(`${this.apiUrl}/Proveedor/${id}`, {
        method: 'DELETE'
      });

      if (!response.ok) {
        const errorMessage = await response.text();
        console.error('Error al eliminar proveedor desde el servidor:', errorMessage);
        throw new Error(errorMessage);
      }
      
      console.log('Proveedor eliminado con éxito desde el servidor.');
    } catch (error) {
      console.error('Error en la petición para eliminar proveedor:', error);
      throw error;
    }
  }
  
}
