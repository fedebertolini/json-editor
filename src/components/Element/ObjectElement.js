import React from 'react';
import Element from './Element';
import Actions from '../Actions';

const getPropertyName = (path) => {
    return path.length ? `${path[path.length - 1]}` : 'array';
}

const ObjectElement = ({ data, path }) => {
    const elements = data.keySeq().map(key => (
        <Element key={key} path={path.concat([key])} />
    ));

    return (
        <li className="element_item">
            <div>
                <span className="element_item_prop-name">
                    {getPropertyName(path)}
                </span>
                <span className="element_item_array-size">
                    {`{${data.size}}`}
                </span>
                <Actions path={path} allowAddProperty />
            </div>
            <ul className="element_list">
                {elements}
            </ul>
        </li>
    );
};

export default ObjectElement;
