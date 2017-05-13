import React from 'react';
import Element from './Element';

const getPropertyName = (path, propertyCount) => {
    if (path.length) {
        return `${path[path.length - 1]} {${propertyCount}}`;
    }
    return `object {${propertyCount}}`;
}

const ObjectElement = ({ data, path }) => {
    const elements = data.keySeq().map(key => (
        <Element key={key} path={path.concat([key])} />
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

export default ObjectElement;
