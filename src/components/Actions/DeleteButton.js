import React, { Component } from 'react';
import { Icon, Modal, Button, Header } from 'semantic-ui-react';
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
        <code>{stringifyPath(path)}</code>
    </Modal.Content>
);

class DeleteButton extends Component {
    componentWillMount() {
        this.state = { isOpen: false };
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({ isOpen: !this.state.isOpen });
    }

    render() {
        const { path, onClickHandler } = this.props;
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
                    <Button color='red' onClick={onClickHandler}>Yes</Button>
                </Modal.Actions>
            </Modal>
        );
    }
}

export default DeleteButton;
