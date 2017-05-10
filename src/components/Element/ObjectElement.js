import React from 'react';
import Element from '.';

const ObjectElement = ({ data, path }) => {

    const elements = data.keySeq().map(key => (
        <li key={key}>
            {key}:
            <Element path={path.concat([key])} />
        </li>
    ));

    return (
        <ul>{elements}</ul>
    );
};

export default ObjectElement;
