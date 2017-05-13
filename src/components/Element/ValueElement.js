import React from 'react';

const ValueElement = ({ data, path }) => (
    <li className="element_item">
        <span className="element_item_prop-name">
            {`${path[path.length - 1]}`}
        </span>
        <span className="element_item_value-separator">:</span>
        <span>{data}</span>
    </li>
);

export default ValueElement;
