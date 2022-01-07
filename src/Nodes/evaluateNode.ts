import { JSXNode, LeafNode } from '../JSX';
import { Forest } from './types';

export const evaluateJSXNode = ({ props, children, type }: JSXNode<object>): Forest => {
    if (type === '_fragment') {
        return (children || []).map(evaluateNode).flat();
    }

    if (typeof type === 'function') {
        return evaluateNode(type({ ...props, children }));
    }

    return [{
        tagName: type,
        props: props || null,
        children: (children || []).flat().map(evaluateNode).flat()
    }];
};

export const evaluateNode = (node: JSXNode<object> | LeafNode): Forest => {
    if (typeof node === 'object') {
        return evaluateJSXNode(node);
    }

    return [ node ];
};