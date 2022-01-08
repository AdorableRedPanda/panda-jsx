// todo: проверять аььрибуты типизацией на этапе написания JSX
const allowedPropKeys = ['id', 'className', 'style', 'href', 'target'];
const keysReplacement: Record<string, string> = {
    className: 'class'
};

const camelToKebabCase = (str: string): string => str.replace(/[A-Z]/g, letter => `-${letter.toLowerCase()}`);


const isAllowedAttribute = (key: string) : boolean => allowedPropKeys.includes(key) || key.startsWith('data-');

const stringifyAttributeValue = (value: Record<string, string> | string): string => {
    if (typeof value === 'object') {
        return Object.entries(value).map(([key, value]) => `${camelToKebabCase(key)}:${value}`).join(';');
    }

    return value;
};

export const getStringEntries = (props: object): [string, string][] => {
    const keys = Object.keys(props).filter(isAllowedAttribute);

    return keys.map(key => [keysReplacement[key] || key, stringifyAttributeValue(props[key])]);
};