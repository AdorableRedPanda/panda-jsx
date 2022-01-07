import { JSXNode } from '../JSX';
import { evaluateNode } from '../Nodes';
import { createNode } from '../DOM';

export const render = (node: JSXNode<object>, root: HTMLElement | null) => {
    if (!root) {
        return;
    }
    root.append(...evaluateNode(node).map(createNode));
};