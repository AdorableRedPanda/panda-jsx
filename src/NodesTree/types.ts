import { DOMTag } from '../JSX';

export type LeafNode = string;

export interface VNode<Props = object> {
    props: Props | null; // todo: добавить типизацию пропсов в зависимости от tagName
    tagName: DOMTag;
    children: VTree; // todo: добавить обращение к дочерним элементам по ключам?
}
// todo: общий интерфейс для вершин
// todo: имена интерфейсов
export type VTree = (LeafNode | VNode)[]