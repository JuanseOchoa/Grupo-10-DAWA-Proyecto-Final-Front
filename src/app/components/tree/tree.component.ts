import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TreeNode } from 'src/app/models/TreeNode';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.css'],
})
export class TreeComponent implements OnInit {
  @Input() treeData: TreeNode[] = [];
  @Output() nodeClick: EventEmitter<string> = new EventEmitter<string>();

  ngOnInit(): void {}

  toggleNode(node: TreeNode): void {
    node.expanded = !node.expanded;
  }

  onNodeClick(nodeName: string): void {
    this.nodeClick.emit(nodeName);
  }
}
