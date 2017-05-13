import React, { Component } from 'react';
import { Modal, Button, Header, Form } from 'semantic-ui-react';
import { stringifyPath, lastProperty } from '../../utils/path';
import ValueEditor from './ValueEditor';

class ValueEditorModal extends Component {

    componentWillMount() {
        this.state = {
            value: this.props.data,
            name: lastProperty(this.props.path)
        };
        this.changeValue = this.changeValue.bind(this);
        this.confirmChange = this.confirmChange.bind(this);
    }

    changeValue(name, value) {
        this.setState({
            name,
            value,
        });
    }

    confirmChange() {
        this.props.onConfirm(this.state.name, this.state.value);
    }

    render() {
        const path = this.props.path;
        return (
            <Modal
                size='small'
                open={this.props.modalOpen}
            >
                <Header content={this.props.title} />
                <Modal.Content>
                    <Form>
                        <Form.Group inline>
                            <strong>Parent:</strong>
                            <code>{stringifyPath(path.slice(0, path.length - 1))}</code>
                        </Form.Group>
                        <ValueEditor
                            path={this.props.path}
                            name={this.state.name}
                            value={this.state.value}
                            onChange={this.changeValue}
                        />
                    </Form>
                </Modal.Content>
                <Modal.Actions>
                    <Button basic onClick={this.props.onCancel}>Cancel</Button>
                    <Button color='green' onClick={this.confirmChange}>Save</Button>
                </Modal.Actions>
            </Modal>
        )
    }
}

export default ValueEditorModal;
