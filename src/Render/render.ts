import { JSXNode } from '../JSX';
import { buildTree } from '../NodesTree';
import { createNode } from '../DOM';

export const render = (node: JSXNode<object>, root: HTMLElement) => {
    root.append(...buildTree(node).map(createNode));
};