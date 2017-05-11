import React from 'react';

const ValueElement = ({ data, path }) => (
    <li className="element__item">
        {`${path[path.length - 1]} : ${data}`}
    </li>
);

export default ValueElement;
