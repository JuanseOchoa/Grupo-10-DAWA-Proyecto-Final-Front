import { Component, Input, SimpleChanges, OnChanges } from '@angular/core';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css'],
})
export class CrudComponent {
  @Input() selectedNodeName: string = '';

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['selectedNodeName']) {
    }
  }
}
