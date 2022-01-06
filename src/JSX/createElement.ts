import { Types, JSXNodeType, NodeChild } from './types';

export const createElement = <Props>(
    type: JSXNodeType<Props>,
    props: Props,
    ...children: NodeChild[]
): Types<Props> => ({ type, props, children });
