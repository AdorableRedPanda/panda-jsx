type DOMTag = keyof HTMLElementTagNameMap;

type FragmentType = '_fragment';

interface WithChildren {
    children?: NodeChild[] | NodeChild;
}

type PropsWithChildren<Props> = Props & WithChildren;

type ComponentFunction<Props> = (props: PropsWithChildren<Props>) => JSXNode<unknown>;

export type FC<Props> = ComponentFunction<Props>

export type JSXNodeType<Props> = DOMTag | FragmentType | ComponentFunction<Props>;

export type NodeChild = string | null | undefined | JSXNode<unknown>;

export interface JSXNode<Props> {
    type: JSXNodeType<Props>;
    props: Props | null;
    children?: NodeChild[];
}