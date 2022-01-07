import { JSXNode, NodeChild } from '../JSX';
import { VTree } from './types';

const buildChild = (child: NodeChild): VTree => {
    if (!child) {
        return [];
    }

    if (typeof child === 'string' || typeof child === 'number') {
        return [ child.toString() ];
    }

    const { type, children, props } = child;
    if (type === '_fragment') {
        return (children || []).flat().map(buildTree).flat();
    }

    if (typeof type === 'function') {
        return [ ...buildTree(type({ ...props, children })) ];
    }

    return [ ...buildTree(child) ];

};

// todo: нормально назвать функции
export const buildTree = ({ props, children, type }: JSXNode<object>): VTree => {
    if (type === '_fragment') {
        return (children || []).flat().map(buildTree).flat();
    }

    if (typeof type === 'function') {
        return buildTree(type({ ...props, children }));
    }

    return [{
        tagName: type,
        props: props,
        children: (children || []).flat().map(buildChild).flat()
    }];
};