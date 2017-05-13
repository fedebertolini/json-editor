export const stringifyPath = (path = []) => {
    return path.reduce((reduction, value) => {
        if (typeof value === 'number') {
            return `${reduction}[${value}]`;
        }
        return `${reduction}.${value}`;
    }, '');
};
