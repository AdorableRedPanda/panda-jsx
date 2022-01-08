import { JSXNodeType, NodeChild, JSXNode } from './types';

export const createElement = <Props extends object>(
    type: JSXNodeType<Props>,
    props: Props,
    ...children: NodeChild[]
): JSXNode<Props> => ({ type, props, children: children.flat() });
