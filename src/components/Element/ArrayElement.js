import React from 'react';
import Element from '.';

const getPropertyName = (path, arraySize) => {
    if (path.length) {
        return `${path[path.length - 1]} [${arraySize}]`;
    }
    return `array [${arraySize}]`;
}

const ArrayElement = ({ data, path }) => {
    const isRoot = path.length === 0;
    const elements = data.toArray().map((value, index) => (
        <Element key={index} path={path.concat([index])} />
    ));

    const list = (
        <div>
            <div>{getPropertyName(path, data.size)}</div>
            <ul className="element__list">
                {elements}
            </ul>
        </div>
    );
    if (isRoot) {
        return list;
    }
    return (
        <li className="element__item">{list}</li>
    );
};

export default ArrayElement;
