import { Injectable } from '@angular/core';
import { Categoria } from '../models/Categoria';
import { ProductoResponse } from '../models/ProductoResponse';


@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  private apiUrl = 'https://localhost:7226/api'; 

  constructor() {}

  async getCategorias(): Promise<Categoria[]> {
    try {
      const response = await fetch(`${this.apiUrl}/categoria`); 
      const categorias = await response.json();
      return categorias;
    } catch (error) {
      console.error('Error obteniendo categorías:', error);
      throw error;
    }
  }

  async crearCategoria(categoria: Categoria): Promise<Categoria> {
    try {
      const response = await fetch(`${this.apiUrl}/Categoria`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(categoria)
      });
  
      if (response.ok) {
        const categoriaCreada = await response.json();
        return categoriaCreada;
      } else {
        throw new Error('Error al crear la categoría');
      }
    } catch (error) {
      console.error('Error al crear la categoría:', error);
      throw error;
    }
  }

  async obtenerNombreCategoriaPorId(idCategoria: number): Promise<string> {
    var categoria = "";
    try {
      categoria = (await this.getCategoriaById(idCategoria))?.nombre!
    } catch (error) {
      console.error('Error al obtener categoría por id:', error);
    }
    return categoria;
  }


  async getCategoriaById(id: number): Promise<Categoria> {
    try {
      const response = await fetch(`${this.apiUrl}/Categoria/${id}`);
      if (response.ok) {
        const categoriaData = await response.json();
        const categoria: Categoria = {
          id: categoriaData.id,
          nombre: categoriaData.nombre,
          descripcion: categoriaData.descripcion
        };
        return categoria;
      } else {
        throw new Error('Error al obtener la categoría por ID');
      }
    } catch (error) {
      console.error('Error obteniendo categoría por ID:', error);
      throw error;
    }
  }


  async getProductosPorCategoria(categoriaId: number): Promise<ProductoResponse[]> {
    try {
      const response = await fetch(`${this.apiUrl}/Producto/categoria/${categoriaId}`);
      const productos = await response.json();
      return productos;
    } catch (error) {
      console.error('Error obteniendo productos por categoría:', error);
      throw error;
    }
  }

  async eliminarCategoria(id: number): Promise<string> {
    try {
      const response = await fetch(`${this.apiUrl}/Categoria/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        const mensaje = await response.text();
        return mensaje;
      } else if (response.status === 404) {
        throw new Error('Categoría no encontrada');
      } else {
        throw new Error('Error al eliminar la categoría');
      }
    } catch (error) {
      console.error('Error al eliminar la categoría:', error);
      throw error;
    }
  }
  async actualizarCategoria(id: number, categoria: Categoria): Promise<Categoria> {
    try {
      const response = await fetch(`${this.apiUrl}/Categoria/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(categoria)
      });

      if (response.ok) {
        const updatedCategoria = await response.json();
        return updatedCategoria;
      } else if (response.status === 404) {
        throw new Error('Categoría no encontrada');
      } else {
        throw new Error('Error al actualizar la categoría');
      }
    } catch (error) {
      console.error('Error al actualizar la categoría:', error);
      throw error;
    }
  }
}
