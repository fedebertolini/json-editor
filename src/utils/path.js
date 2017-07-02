export const stringifyPath = (path = []) => {
    return path.reduce((reduction, value) => {
        if (typeof value === 'number') {
            return `${reduction}[${value}]`;
        }
        return `${reduction}.${value}`;
    }, '');
};

export const lastProperty = (path = []) => {
    if (path.length) {
        return path[path.length - 1];
    }
    return '';
}
