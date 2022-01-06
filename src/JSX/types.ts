type DOMTag = keyof HTMLElementTagNameMap;

type FragmentType = 'FRAGMENT';

interface WithChildren {
    children: NodeChild[];
}

type PropsWithChildren<Props> = Props & WithChildren;

type ComponentFunction<Props> = (props: PropsWithChildren<Props>) => Types<unknown>;

export type JSXNodeType<Props> = DOMTag | FragmentType | ComponentFunction<Props>;

export type NodeChild = string | null | Types<unknown>;

export interface Types<Props> {
    type: JSXNodeType<Props>;
    props: Props | null;
    children: NodeChild[];
}