import { Component } from '@angular/core';
import { Producto } from 'src/app/models/Producto';
import { ProductoResponse } from 'src/app/models/ProductoResponse';
import { Categoria } from 'src/app/models/Categoria';
import { ProductoService } from 'src/app/services/producto.service';
import { CategoriaService } from 'src/app/services/categoria.service';

@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.css'],
})
export class InventarioComponent {
  lstCategorias: Categoria[] = [];
  productosFiltrados: Producto[] = [];
  CategoriaFiltros: Categoria[] = [];
  terminoBusqueda: string = '';
  categoriaFiltro: number = 0;
  producto: ProductoResponse | null = null;
  idProducto: number = 0;

  constructor(
    private productoService: ProductoService,
    private categoriaService: CategoriaService
  ) {
    this.cargarCategorias();
  }

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

  async cargarCategorias(): Promise<void> {
    try {
      this.lstCategorias = await this.categoriaService.getCategorias();
    } catch (error) {
      console.error('Error al cargar categorías:', error);
    }
  }
  async filtrarProductos(): Promise<void> {
    try {
      // Filtrar productos por término de búsqueda
      this.productosFiltrados = await this.productoService.filtrarProductos(this.terminoBusqueda);
      console.log(JSON.stringify(this.productosFiltrados));
    } catch (error) {
      console.error('Error al filtrar productos:', error);
    }
  }

  async filtrarcategoria(): Promise<void> {
    try {
      if (this.categoriaFiltro) {
          const idCategoria = this.categoriaFiltro;
          this.productosFiltrados = await this.productoService.getProductosPorIdCategoria(idCategoria);
          console.log(this.productosFiltrados);
      } else {
        // Mostrar todas las categorías si no hay filtro
        this.CategoriaFiltros = this.lstCategorias;
        this.productosFiltrados = await this.productoService.filtrarProductos('');
      }
    } catch (error) {
      console.error('Error al filtrar categorías:', error);
    }
  }

  async obtenerCategoriaPorId(idCategoria: number): Promise<string> {
    var categoria = "";
    try {
      categoria = (await this.categoriaService.getCategoriaById(idCategoria))?.nombre!
    } catch (error) {
      console.error('Error al obtener categoría por id:', error);
    }
    console.log(categoria);
    return categoria;
  }

  
}
