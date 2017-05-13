import React from 'react';
import Element from './Element';

const getPropertyName = (path, arraySize) => {
    if (path.length) {
        return `${path[path.length - 1]} [${arraySize}]`;
    }
    return `array [${arraySize}]`;
}

const ArrayElement = ({ data, path }) => {
    const elements = data.toArray().map((value, index) => (
        <Element key={index} path={path.concat([index])} />
    ));

    return (
        <li className="element__item">
            <div>{getPropertyName(path, data.size)}</div>
            <ul className="element__list">
                {elements}
            </ul>
        </li>
    );
};

export default ArrayElement;
