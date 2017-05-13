import React from 'react';
import Actions from '../Actions';

const printValue = (value) => typeof value === 'string' ? `"${value}"` : `${value}`;

const ValueElement = ({ data, path }) => (
    <li className="element_item">
        <span className="element_item_prop-name">
            {`${path[path.length - 1]}`}
        </span>
        <span className="element_item_value-separator">:</span>
        <span>{printValue(data)}</span>

        <Actions path={path} />
    </li>
);

export default ValueElement;
