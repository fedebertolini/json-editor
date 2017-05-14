import React from 'react';
import Element from './Element';

const RootElement = () => (
    <ul className="element_list">
        <Element path={[]} defaultExpanded />
    </ul>
);

export default RootElement;
