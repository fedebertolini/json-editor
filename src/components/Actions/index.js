import React, { Component } from 'react';
import EditButton from './EditButton';
import DeleteButton from './DeleteButton';
import './styles.css';

class Actions extends Component {

    render() {
        return (
            <span className="actions_container">
                <EditButton />
                <DeleteButton />
            </span>
        );
    }
}

export default Actions;
