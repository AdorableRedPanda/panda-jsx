import { JSXNode, LeafNode } from '../JSX';
import { Forest } from './types';

export const evaluateJSXNode = ({ props, children, type }: JSXNode<object>): Forest => {
    if (typeof type === 'function') {
        return evaluateNode(type({ ...props, children }));
    }

    const strictChildren = children || [];

    if (type === '_fragment') {
        return strictChildren.map(evaluateNode).flat();
    }

    return [{
        tagName: type,
        props: props || null,
        children: strictChildren.flat().map(evaluateNode).flat()
    }];
};

export const evaluateNode = (node: JSXNode<object> | LeafNode): Forest => {
    if (node === null || node === undefined || node === false) {
        return [];
    }

    if (typeof node === 'object') {
        return evaluateJSXNode(node);
    }

    return [ node ];
};