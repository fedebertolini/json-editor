export const getValueType = (value) => {
    const type = typeof value;
    if (['string', 'number', 'boolean'].some(v => v === type)) {
        return type;
    }
    if (value === null) {
        return 'null';
    }
    if (value.constructor === Array) {
        return 'array';
    }
    return 'object';
};

const defaultValues = {
    'string': '',
    'number': 0,
    'boolean': false,
    'null': null,
    'array': [],
    'object': {},
};

export const getDefaultValue = (type) => defaultValues[type];
