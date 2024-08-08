import { Component } from '@angular/core';
import { Categoria } from 'src/app/models/Categoria';
import { CategoriaService } from 'src/app/services/categoria.service';

@Component({
  selector: 'app-form-categoria',
  templateUrl: './form-categoria.component.html',
  styleUrls: ['./form-categoria.component.css']
})
export class FormCategoriaComponent {
  categoria: Categoria = new Categoria(0, '', '');

  constructor(private categoriaService: CategoriaService) {}

  async guardarCategoria(): Promise<void> {
    try {
      const categoriaCreada = await this.categoriaService.crearCategoria(this.categoria);
      console.log('Categoría creada:', categoriaCreada);
      // Aquí puedes realizar alguna acción después de crear la categoría, como redireccionar o actualizar la lista de categorías.

      // Reiniciar el formulario
      this.categoria = new Categoria(0, '', ''); // Crea una nueva instancia vacía
    } catch (error) {
      console.error('Error al guardar la categoría:', error);
    }
  }
}
