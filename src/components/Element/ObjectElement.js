import React from 'react';
import Element from '.';

const getPropertyName = (path, propertyCount) => {
    if (path.length) {
        return `${path[path.length - 1]} {${propertyCount}}`;
    }
    return `object {${propertyCount}}`;
}

const ObjectElement = ({ data, path }) => {
    const isRoot = path.length === 0;
    const elements = data.keySeq().map(key => (
        <Element key={key} path={path.concat([key])} />
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

export default ObjectElement;
