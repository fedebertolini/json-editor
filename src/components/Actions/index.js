import React from 'react';
import EditButton from './EditButton';
import DeleteButton from './DeleteButton';
import './styles.css';

const Actions = ({ path }) => (
    <span className="actions_container">
        <EditButton path={path} />
        <DeleteButton path={path} />
    </span>
);

export default Actions;
