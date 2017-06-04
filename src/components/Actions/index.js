import React from 'react';
import EditButton from './EditButton';
import DeleteButton from './DeleteButton';
import AddArrayItemButton from './AddArrayItemButton';
import AddObjectPropertyButton from './AddObjectPropertyButton';
import './styles.css';

const Actions = ({ path, allowAddItem, allowAddProperty, allowDelete, allowEdit }) => (
    <span className="actions_container">
        {allowEdit && <EditButton path={path} />}
        {allowAddItem && <AddArrayItemButton path={path} />}
        {allowAddProperty && <AddObjectPropertyButton path={path} />}
        {allowDelete && <DeleteButton path={path} />}
    </span>
);

export default Actions;
