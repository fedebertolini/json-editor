import React from 'react';
import Element from './Element';

const getPropertyName = (path) => {
    return path.length ? `${path[path.length - 1]}` : 'array';
}

const ArrayElement = ({ data, path }) => {
    const elements = data.toArray().map((value, index) => (
        <Element key={index} path={path.concat([index])} />
    ));

    return (
        <li className="element_item">
            <div>
                <span className="element_item_prop-name">
                    {getPropertyName(path)}
                </span>
                <span className="element_item_array-size">
                    {`[${data.size}]`}
                </span>
            </div>
            <ul className="element_list">
                {elements}
            </ul>
        </li>
    );
};

export default ArrayElement;
