import React from 'react';
import { Accordion, List } from 'semantic-ui-react';
import Element from '.';

const getPropertyName = (path, arraySize) => {
    if (path.length) {
        return `${path[path.length - 1]} [${arraySize}]`;
    }
    return `array [${arraySize}]`;
}

const ArrayElement = ({ data, path }) => {

    const elements = data.toArray().map((value, index) => (
        <List.Item key={index}>
            <Element path={path.concat([index])} />
        </List.Item>
    ));

    const panels = [{
        title: getPropertyName(path, data.size),
        content: <List>{elements}</List>,
    }];

    return <Accordion panels={panels} />;
};

export default ArrayElement;
