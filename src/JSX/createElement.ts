import { JSXNodeType, NodeChild, JSXNode } from './types';

export const createElement = <Props>(
    type: JSXNodeType<Props>,
    props: Props,
    ...children: NodeChild[]
): JSXNode<Props> => ({ type, props, children });
