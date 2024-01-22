import { Plugin } from 'vite';

const jsxRequiredImports = `
/** @jsx createElement */
import { createElement } from \'panda-jsx\';
`;

function isTsx (filename: string) {
    return filename.endsWith('.tsx') || filename.endsWith('.jsx');
}

export function JSXCreateElementPlugin (): Plugin {
    return {
        name: 'panda-jsx-create-element-plugin',

        transform (src, id) {
            const code = isTsx(id)
                ? `${jsxRequiredImports};\n${src}`
                : src;

            return {
                code,
            };
        },
    };
}