import { Component } from '@angular/core';
import { Categoria } from 'src/app/models/Categoria';
import { CategoriaService } from 'src/app/services/categoria.service';

@Component({
  selector: 'app-mantenimiento-categoria',
  templateUrl: './mantenimiento-categoria.component.html',
  styleUrls: ['./mantenimiento-categoria.component.css'],
  
})
export class MantenimientoCategoriaComponent {
  categoria: Categoria | null = null;
  idCategoria: number = 0;
  constructor(private categoriaService: CategoriaService) {}

async buscarCategoria(): Promise<void> {
  try {
    this.categoria = await this.categoriaService.getCategoriaById(this.idCategoria);
  } catch (error) {
    console.error('Error al obtener Proveedor:', error);
  }
}


  limpiarBusqueda(): void {
    this.categoria = null;
    this.idCategoria = 0;
  }

  async editarCategoria(): Promise<void> {
    if (this.categoria && this.categoria.id) {
      try {
        const updatedCategoria = await this.categoriaService.actualizarCategoria(this.categoria.id, this.categoria);
        console.log('Categoría actualizada:', updatedCategoria);
        this.limpiarBusqueda(); // O cualquier otra acción que desees después de eliminar

        // Realiza alguna acción adicional si es necesario después de la actualización
      } catch (error) {
        console.error('Error al editar la categoría:', error);
      }
    } else {
      console.log('No hay categoría para editar');
    }
  }
  async eliminarCategoria(): Promise<void> {
    if (this.categoria && this.categoria.id) {
      try {
        await this.categoriaService.eliminarCategoria(this.categoria.id);
        console.log('Categoría eliminada');
        this.limpiarBusqueda(); // O cualquier otra acción que desees después de eliminar

        this.categoria = null;  
    

      } catch (error) {
        console.error('Error al eliminar la categoría:', error);
      }
    } else {
      console.log('No hay categoría para eliminar');
    }
  }

  crearCategoria(): void {
    // Lógica para crear una nueva categoría en la base de datos
    console.log('Nueva categoría creada:', this.categoria);
  }
}
