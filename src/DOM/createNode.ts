import { TagNode } from '../Nodes/types';
import { DOMHelper } from './types';
import { LeafNode } from '../JSX';
import { getStringEntries } from './stringifyProps';

const createTextNode: DOMHelper<string> = value => document.createTextNode(value);

const createTagNode: DOMHelper<TagNode> = value => {
    const node = document.createElement(value.tagName);
    const propsEntries = getStringEntries(value.props || {});
    propsEntries.forEach(([attribute, value]) => node.setAttribute(attribute, value));

    const childNodes = value.children.map(createNode);

    node.append(...childNodes);

    return node;
};

export function createNode (value: TagNode|LeafNode) {
    if (value === null || value === undefined || value === false) {
        return createTextNode('');

    }
    if (typeof value === 'object') {
        return createTagNode(value);
    }

    return createTextNode(value.toString());
}