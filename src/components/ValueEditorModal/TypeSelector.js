import React from 'react';
import { Dropdown } from 'semantic-ui-react';

const valueTypes = [{
    value: 'string',
    text: 'String',
}, {
    value: 'number',
    text: 'Number',
}, {
    value: 'boolean',
    text: 'Boolean',
}, {
    value: 'array',
    text: 'Array',
}, {
    value: 'object',
    text: 'Object',
}, {
    value: 'null',
    text: 'Null',
}];

const TypeSelector = ({ selectedType, onChange }) => (
    <Dropdown
        fluid
        selection
        options={valueTypes}
        onChange={(event, data) => onChange(data.value)}
        defaultValue={selectedType}
    />
);

export default TypeSelector;
