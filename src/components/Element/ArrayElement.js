import React from 'react';
import Element from '.';

const ArrayElement = ({ data, path }) => {
    const elements = data.map((value, index) => (
        <li key={index}>
            <Element path={path.concat([index])} />
        </li>
    ));

    return (
        <ul>{elements}</ul>
    );
};

export default ArrayElement;
