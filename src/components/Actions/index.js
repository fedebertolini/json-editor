import React from 'react';
import { connect } from 'react-redux';
import EditButton from './EditButton';
import DeleteButton from './DeleteButton';
import { deleteData } from  '../../store/actions/edited';
import './styles.css';

const Actions = ({ path, deleteData }) => {
    const onDelete = () => deleteData(path);

    return (
        <span className="actions_container">
            <EditButton />
            <DeleteButton onClickHandler={onDelete} path={path} />
        </span>
    );
}

const mapDispatchToProps = {
    deleteData,
};

export default connect(null, mapDispatchToProps)(Actions);
