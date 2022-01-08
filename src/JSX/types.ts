export type DOMTag = keyof HTMLElementTagNameMap;

type FragmentType = '_fragment';

interface WithChildren {
    children?: NodeChild[] | NodeChild;
}

// todo: убрать object кругом

export type LeafNode = string | number | undefined | false | null;

export type PropsWithChildren<Props> = Props & WithChildren;

type ComponentFunction<Props> = (props: PropsWithChildren<Props>) => JSXNode<object> | LeafNode;

export type FC<Props = {}> = ComponentFunction<Props>

export type JSXNodeType<Props> = DOMTag | FragmentType | ComponentFunction<Props>;

export type NodeChild = LeafNode | JSXNode<object>;

export interface JSXNode<Props extends object> {
    type: JSXNodeType<Props>;
    props?: Props | null;
    children?: NodeChild[];
}