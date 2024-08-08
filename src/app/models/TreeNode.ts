export class TreeNode {
  name: string;
  children?: TreeNode[];
  expanded?: boolean;

  constructor(name: string, children?: TreeNode[], expanded?: boolean) {
    this.name = name;
    this.children = children;
    this.expanded = expanded;
  }
}
