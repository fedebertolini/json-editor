import React, { Component } from 'react';
import { connect } from 'react-redux';
import EditButton from './EditButton';
import DeleteButton from './DeleteButton';
import { deleteData } from  '../../store/actions/edited';
import './styles.css';

class Actions extends Component {

    onDelete() {
        this.props.deleteData(this.props.path);
    }

    render() {
        const { path } = this.props;
        return (
            <span className="actions_container">
                <EditButton />
                <DeleteButton onClickHandler={this.onDelete.bind(this)} path={path} />
            </span>
        );
    }
}

const mapDispatchToProps = {
    deleteData,
};

export default connect(null, mapDispatchToProps)(Actions);
