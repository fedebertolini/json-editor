import React from 'react';
import EditButton from './EditButton';
import DeleteButton from './DeleteButton';
import AddArrayItemButton from './AddArrayItemButton';
import AddObjectPropertyButton from './AddObjectPropertyButton';
import './styles.css';

const Actions = ({ path, allowAddItem, allowAddProperty }) => (
    <span className="actions_container">
        <EditButton path={path} />
        {allowAddItem && <AddArrayItemButton path={path} />}
        {allowAddProperty && <AddObjectPropertyButton path={path} />}
        <DeleteButton path={path} />
    </span>
);

export default Actions;
