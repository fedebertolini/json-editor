import React from 'react';
import EditButton from './EditButton';
import DeleteButton from './DeleteButton';
import AddArrayItemButton from './AddArrayItemButton';
import './styles.css';

const Actions = ({ path, allowAddItem }) => (
    <span className="actions_container">
        <EditButton path={path} />
        {allowAddItem && <AddArrayItemButton path={path} />}
        <DeleteButton path={path} />
    </span>
);

export default Actions;
