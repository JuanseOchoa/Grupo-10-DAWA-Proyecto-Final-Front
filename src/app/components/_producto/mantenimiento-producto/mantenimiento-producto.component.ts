import { Component } from '@angular/core';
import { ProductoResponse } from 'src/app/models/ProductoResponse';
import { ProductoService } from 'src/app/services/producto.service';
import { CategoriaService } from 'src/app/services/categoria.service';

@Component({
  selector: 'app-mantenimiento-producto',
  templateUrl: './mantenimiento-producto.component.html',
  styleUrls: ['./mantenimiento-producto.component.css'],
})
export class MantenimientoProductoComponent {
  producto: ProductoResponse | null = null;
  idProducto: number = 0;

  constructor(private productoService: ProductoService, 
    private categoriaService: CategoriaService) {}

  async buscarProducto(): Promise<void> {
    try {
      if (this.idProducto > 0) {
        this.producto = await this.productoService.getProductoById(this.idProducto);
        console.log('Producto encontrado:', this.producto);
      } else {
        console.log('ID de producto no válido.');
      }
    } catch (error) {
      console.error('Error al buscar producto:', error);
    }
  }

  limpiarBusqueda(): void {
    this.producto = null;
    this.idProducto = 0;
  }

  editarProducto(): void {
    if (this.producto) {
      try {
        this.productoService.actualizarProducto(this.producto)
          .then(updatedProducto => {
            if (updatedProducto) {
              console.log('Producto actualizado:', updatedProducto);
              this.limpiarBusqueda(); // O cualquier otra acción que desees después de eliminar

              // Puedes agregar acciones adicionales después de editar
            } else {
              console.log('No se pudo actualizar el producto.');
            }
          })
          .catch(error => {
            console.error('Error al editar producto:', error);
          });
      } catch (error) {
        console.error('Error al editar producto:', error);
      }
    } else {
      console.log('No se ha seleccionado ningún producto para editar.');
    }
  }
  async eliminarProducto(): Promise<void> {
    if (this.producto) {
      try {
        await this.productoService.eliminarProducto(this.producto.id);
        console.log('Producto eliminado con éxito.');
        this.limpiarBusqueda(); // O cualquier otra acción que desees después de eliminar
      } catch (error) {
        console.error('Error al eliminar producto:', error);
      }
    } else {
      console.log('No se ha seleccionado ningún producto para eliminar.');
    }
  }

    async obtenerCategoriaPorId(idCategoria: number): Promise<string> {
    var categoria = "";
    try {
      categoria = (await this.categoriaService.getCategoriaById(idCategoria))?.nombre!
    } catch (error) {
      console.error('Error al obtener categoría por id:', error);
    }
    return categoria;
  }

}
