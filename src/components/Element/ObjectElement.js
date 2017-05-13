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
        <li className="element_item">
            <div className="element_item_prop-name">
                {getPropertyName(path, data.size)}
            </div>
            <ul className="element_list">
                {elements}
            </ul>
        </li>
    );
};

export default ObjectElement;
