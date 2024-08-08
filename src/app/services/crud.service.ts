import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CrudService {
  selectedNodeName = '';

  setNodeName(nodeName: string): void {
    this.selectedNodeName = nodeName;
  }

  getNodeName(): string {
    return this.selectedNodeName;
  }
}
