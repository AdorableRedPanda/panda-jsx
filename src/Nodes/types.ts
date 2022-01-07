import { DOMTag, LeafNode } from '../JSX';

export interface TagNode<Props = object> {
    tagName: DOMTag;
    props: Props | null;
    children: Node[];
}

export type Node = TagNode | LeafNode;

export type Forest = Node[];

