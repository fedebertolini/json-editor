import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Icon, Modal, Button, Header } from 'semantic-ui-react';
import { deleteData } from  '../../store/actions/edited';
import { stringifyPath } from '../../utils/path';

const ModalTrigger = ({ onClick }) => (
    <span
        onClick={onClick}
        className="actions_button actions_button_red">
        <Icon name='delete' />
    </span>
);

const ModalContent = ({ path }) => (
    <Modal.Content>
        <p>Are you sure you want to delete this property?</p>
        <strong>Path:</strong>
        <code>{stringifyPath(path)}</code>
    </Modal.Content>
);

class DeleteButton extends Component {
    componentWillMount() {
        this.state = { isOpen: false };
        this.toggle = this.toggle.bind(this);
        this.confirmDelete = this.confirmDelete.bind(this);
    }

    toggle() {
        this.setState({ isOpen: !this.state.isOpen });
    }

    confirmDelete() {
        this.toggle();
        this.props.deleteData(this.props.path);
    }

    render() {
        const { path } = this.props;
        return (
            <Modal
                trigger={<ModalTrigger onClick={this.toggle} />}
                size='small'
                open={this.state.isOpen}
            >
                <Header content='Delete Property' />
                <ModalContent path={path} />
                <Modal.Actions>
                    <Button basic onClick={this.toggle}>No</Button>
                    <Button color='red' onClick={this.confirmDelete}>Yes</Button>
                </Modal.Actions>
            </Modal>
        );
    }
}

const mapDispatchToProps = {
    deleteData,
};

export default connect(null, mapDispatchToProps)(DeleteButton);
