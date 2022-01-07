export type DOMTag = keyof HTMLElementTagNameMap;

type FragmentType = '_fragment';

interface WithChildren {
    children?: NodeChild[] | NodeChild;
}

export type PropsWithChildren<Props> = Props & WithChildren;

type ComponentFunction<Props> = (props: PropsWithChildren<Props>) => JSXNode<object>;

export type FC<Props = {}> = ComponentFunction<Props>

export type JSXNodeType<Props> = DOMTag | FragmentType | ComponentFunction<Props>;

type LeafNode = string | number;

export type NodeChild = LeafNode | undefined | JSXNode<object>;

export interface JSXNode<Props extends object> {
    type: JSXNodeType<Props>;
    props: Props | null;
    children?: NodeChild[];
}