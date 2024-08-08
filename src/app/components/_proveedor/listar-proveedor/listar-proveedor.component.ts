import { Component, OnInit } from '@angular/core';
import { ProveedorService } from 'src/app/services/proveedor.service';
import { Proveedor } from 'src/app/models/Proveedor';
@Component({
  selector: 'app-listar-proveedor',
  templateUrl: './listar-proveedor.component.html',
  styleUrls: ['./listar-proveedor.component.css'],
})
export class ListarProveedorComponent implements OnInit {
  lstProveedores: Proveedor[] = [];

  constructor(private proveedorService: ProveedorService) {}

  async ngOnInit(): Promise<void> {
    try {
      this.lstProveedores = await this.proveedorService.getProveedores();
    } catch (error) {
      console.error('Error al obtener proveedores:', error);
    }
    console.log(this.lstProveedores);
  }
  
}
