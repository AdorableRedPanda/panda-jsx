import { VNode } from '../NodesTree/types';
import { DOMHelper } from './types';

const createTextNode: DOMHelper<string> = value => document.createTextNode(value);

export const createNode: DOMHelper<VNode> = value => {
    // todo: добавить обработку пропсов
    const node = document.createElement(value.tagName);

    const childNodes = value.children.map(child => {
        if (typeof child === 'string') {
            return createTextNode(child);
        }
        return createNode(child);
    });

    node.append(...childNodes);

    return node;
};