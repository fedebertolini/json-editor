import React from 'react';
import { Input, Checkbox } from 'semantic-ui-react';
import throttle from 'lodash/throttle';
import { getValueType } from '../../utils/valueTypes';

const ValueInput = ({ value, onChange }) => {
    switch (getValueType(value)) {
        case 'string': {
            const onInputChange = (e, data) => onChange(data.value);
            return <Input defaultValue={value} onChange={throttle(onInputChange, 250)} />;
        }
        case 'number': {
            const onNumberChange = (e, data) => {
                const value = parseFloat(data.value);
                if (value && !isNaN(value)) {
                    onChange(value);
                }
            };
            return <Input type="number" defaultValue={value} onChange={throttle(onNumberChange, 250)} />;
        }
        case 'boolean': {
            const onCheckboxChange = (e, data) => onChange(data.checked);
            return <Checkbox defaultChecked={value} onChange={onCheckboxChange} />;
        }
        default:
            return null;
    }
};

export default ValueInput;
