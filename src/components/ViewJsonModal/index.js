import React from 'react';
import { connect } from 'react-redux';
import { Modal, Button, Header, Form } from 'semantic-ui-react';
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
                        defaultValue={JSON.stringify(props.data, null, 2)}
                    />
                </Form.Group>
            </Form>
        </Modal.Content>
        <Modal.Actions>
            <Button basic onClick={props.closeModal}>Close</Button>
        </Modal.Actions>
    </Modal>
);

const mapStateToProps = state => ({
    isModalOpen: isModalOpen(state),
    data: selectData(state, []).toJS(),
});

const mapDispatchToProps = {
    closeModal,
};

export default connect(mapStateToProps, mapDispatchToProps)(ViewJsonModal);
