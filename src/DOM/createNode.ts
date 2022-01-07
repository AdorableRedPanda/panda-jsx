import { TagNode } from '../Nodes/types';
import { DOMHelper } from './types';
import { LeafNode } from '../JSX';
import { getStringEntries } from './stringifyProps';

const createTextNode: DOMHelper<LeafNode> = value => document.createTextNode(value.toString());

const createTagNode: DOMHelper<TagNode> = value => {
    const node = document.createElement(value.tagName);
    const propsEntries = getStringEntries(value.props || {});
    console.log(propsEntries);
    propsEntries.forEach(([attribute, value]) => node.setAttribute(attribute, value));

    const childNodes = value.children.map(createNode);

    node.append(...childNodes);

    return node;
};

export function createNode (value: TagNode|LeafNode) {
    if (typeof value === 'object') {
        return createTagNode(value);
    }
    return createTextNode(value);
}