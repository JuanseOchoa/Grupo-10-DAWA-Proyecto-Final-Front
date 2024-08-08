import { Injectable } from '@angular/core';
import { Producto } from '../models/Producto';
import { ProductoResponse } from '../models/ProductoResponse';
import { CategoriaService } from './categoria.service';


@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private apiUrl = 'https://localhost:7226/api';

  constructor(
    private categoriaService: CategoriaService
  ) {}

  async getProductos(): Promise<Producto[]> {
    try {
      const response = await fetch(`${this.apiUrl}/producto`);
      const productosData = await response.json();
      const productos: Producto[] = [];
  
      for (const productoData of productosData) {
        const categoriaById = await this.categoriaService.getCategoriaById(productoData.categoria);
        
        const producto: Producto = {
          id: productoData.id,
          nombre: productoData.nombre,
          descripcion: productoData.descripcion,
          categoria: categoriaById,
          precioUnitario: productoData.precioUnitario,
          stock: productoData.stock,
        };
        
        productos.push(producto);
      }
  
      return productos;
    } catch (error) {
      console.error('Error obteniendo productos:', error);
      throw error;
    }
  }
  

  async getProductoByCode(code: string): Promise<ProductoResponse> {
    try {
      const response = await fetch(`${this.apiUrl}/producto/codigo/${code}`);
      const producto = await response.json();
      return producto;
    } catch (error) {
      console.error('Error obteniendo producto:', error);
      throw error;
    }
  }

  async getProductosByCategoria(categoria: string): Promise<ProductoResponse[]> {
    try {
      const response = await fetch(`${this.apiUrl}/producto/categoria/${categoria}`);
      const productos = await response.json();
      return productos;
    } catch (error) {
      console.error('Error obteniendo productos por categoría:', error);
      throw error;
    }
  }
  async getProductoById(id: number): Promise<ProductoResponse | null> {
    try {
      const response = await fetch(`${this.apiUrl}/Producto/${id}`);
      if (response.ok) {
        const producto = await response.json();
        return producto;
      } else {
        return null; // Producto no encontrado
      }
    } catch (error) {
      console.error('Error obteniendo producto por ID:', error);
      throw error;
    }
  }
  async actualizarProducto(producto: ProductoResponse): Promise<ProductoResponse | null> {
    try {
      const response = await fetch(`${this.apiUrl}/Producto/${producto.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(producto)
      });

      if (response.ok) {
        const productoActualizado = await response.json();
        return productoActualizado;
      } else {
        return null; // No se pudo actualizar el producto
      }
    } catch (error) {
      console.error('Error al actualizar producto:', error);
      throw error;
    }
  }
  async eliminarProducto(id: number): Promise<void> {
    try {
      const response = await fetch(`${this.apiUrl}/Producto/${id}`, {
        method: 'DELETE'
      });

      if (response.ok) {
        console.log('Producto eliminado con éxito.');
      } else {
        throw new Error('Error al eliminar el producto.');
      }
    } catch (error) {
      console.error('Error al eliminar producto:', error);
      throw error;
    }
  }

  async filtrarProductos(terminoBusqueda: string): Promise<Producto[]> {
    try {
      const productos = await this.getProductos(); // Obtiene todos los productos
      const productosFiltrados = productos.filter((producto: Producto) => {
        const cumpleTerminoBusqueda =
          terminoBusqueda === '' || producto.nombre.toLowerCase().includes(terminoBusqueda.toLowerCase());
        return cumpleTerminoBusqueda;
      });
      return productosFiltrados;
    } catch (error) {
      console.error('Error al filtrar productos:', error);
      throw error;
    }
  }

  async getProductosPorIdCategoria(idCategoria: number): Promise<Producto[]> {
    try {
      const response = await fetch(`${this.apiUrl}/producto/categoria/${idCategoria}`);
      const productosData = await response.json();
      const productos: Producto[] = [];
  
      for (const productoData of productosData) {
        const categoriaById = await this.categoriaService.getCategoriaById(productoData.categoria);
        
        const producto: Producto = {
          id: productoData.id,
          nombre: productoData.nombre,
          descripcion: productoData.descripcion,
          categoria: categoriaById,
          precioUnitario: productoData.precioUnitario,
          stock: productoData.stock,
        };
        
        productos.push(producto);
      }
  
      return productos;
    } catch (error) {
      console.error('Error obteniendo productos por ID de categoría:', error);
      throw error;
    }
  }
  
async crearProducto(producto: Producto): Promise<Producto | null> {
  try {
    const response = await fetch(`${this.apiUrl}/Producto`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(producto)
    });

    if (response.ok) {
      const productoCreado = await response.json();
      return productoCreado;
    } else {
      return null; // No se pudo crear el producto
    }
  } catch (error) {
    console.error('Error al crear producto:', error);
    throw error;
  }
}

}
