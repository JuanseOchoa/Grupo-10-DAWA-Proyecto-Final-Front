import { Component, Input, EventEmitter, Output } from '@angular/core';
import { TreeNode } from 'src/app/models/TreeNode';
export { TreeNode } from 'src/app/models/TreeNode';
@Component({
  selector: 'app-mantenimiento',
  templateUrl: './mantenimiento.component.html',
  styleUrls: ['./mantenimiento.component.css'],
})
export class MantenimientoComponent {
  @Output() selectedNodeNameChange = new EventEmitter<string>();
  inputNodeNameMant: string = '';

  treeDataMant: TreeNode[] = [
    {
      name: 'Clientes',
      children: [
        { name: 'Registrar Clientes', expanded: false },
        { name: 'Leer Clientes', expanded: false },
        { name: 'Mantenimiento de Clientes', expanded: false },
      ],
      expanded: false,
    },
    {
      name: 'Proveedores',
      children: [
        { name: 'Registrar Proveedores', expanded: false },
        { name: 'Leer Proveedores', expanded: false },
        { name: 'Mantenimiento de Proveedores', expanded: false },
      ],
      expanded: false,
    },
    {
      name: 'Productos',
      children: [
        { name: 'Registrar Productos', expanded: false },
        { name: 'Leer Productos', expanded: false },
        { name: 'Mantenimiento de Productos', expanded: false },
      ],
      expanded: false,
    },
    {
      name: 'Categorias',
      children: [
        { name: 'Registrar Categorias', expanded: false },
        { name: 'Leer Categorias', expanded: false },
        { name: 'Mantenimiento de Categorias', expanded: false },
      ],
      expanded: false,
    },
  ];

  onNodeClick(node: TreeNode): void {
    this.inputNodeNameMant = node.name;
    this.selectedNodeNameChange.emit(this.inputNodeNameMant);
  }
}
