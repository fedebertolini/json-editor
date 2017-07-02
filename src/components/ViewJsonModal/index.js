import React from 'react';
import { connect } from 'react-redux';
import { Modal, Button, Header, Form } from 'semantic-ui-react';
import copyToClipboard from 'copy-to-clipboard';
import { isModalOpen } from '../../store/selectors/viewModal';
import { selectData } from '../../store/selectors/edited';
import { closeModal } from '../../store/actions/viewModal';
import './styles.css';

const ViewJsonModal = (props) => (
    <Modal
        size='small'
        open={props.isModalOpen}
    >
        <Header content="JSON Data" />
        <Modal.Content className="view-json-modal_content">
            <Form size="large">
                <Form.Group>
                    <Form.TextArea
                        width={16}
                        disabled
                        autoHeight
                        defaultValue={props.data}
                    />
                </Form.Group>
            </Form>
        </Modal.Content>
        <Modal.Actions>
            <Button color="green" onClick={() => copyToClipboard(props.data)}>Copy to Clipboard</Button>
            <Button basic onClick={props.closeModal}>Close</Button>
        </Modal.Actions>
    </Modal>
);

const mapStateToProps = state => ({
    isModalOpen: isModalOpen(state),
    data: JSON.stringify(selectData(state, []).toJS(), null, 2),
});

const mapDispatchToProps = {
    closeModal,
};

export default connect(mapStateToProps, mapDispatchToProps)(ViewJsonModal);
