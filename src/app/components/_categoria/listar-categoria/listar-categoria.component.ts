import { Component, OnInit } from '@angular/core';
import { CategoriaService } from 'src/app/services/categoria.service';
import { Categoria } from 'src/app/models/Categoria';

@Component({
  selector: 'app-listar-categoria',
  templateUrl: './listar-categoria.component.html',
  styleUrls: ['./listar-categoria.component.css'],
})
export class ListarCategoriaComponent implements OnInit {
  lstCategorias: Categoria[] = [];

  constructor(private categoriaService: CategoriaService) {}

  async ngOnInit(): Promise<void> {
    try {
      this.lstCategorias = await this.categoriaService.getCategorias();
    } catch (error) {
      console.error('Error al obtener Categorías:', error);
    }
  }
}
