import React from 'react';
import { Accordion, List } from 'semantic-ui-react';
import Element from '.';

const getPropertyName = (path, propertyCount) => {
    if (path.length) {
        return `${path[path.length - 1]} {${propertyCount}}`;
    }
    return `object {${propertyCount}}`;
}

const ObjectElement = ({ data, path }) => {

    const elements = data.keySeq().map(key => (
        <List.Item key={key}>
            <Element path={path.concat([key])} />
        </List.Item>
    ));

    const panels = [{
        title: getPropertyName(path, data.size),
        content: <List>{elements}</List>,
    }];

    return <Accordion panels={panels} />;
};

export default ObjectElement;
