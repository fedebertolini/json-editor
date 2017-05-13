import React, { Component } from 'react';
import { Icon } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { changeData } from  '../../store/actions/edited';
import { selectData } from '../../store/selectors/edited';
import ValueEditorModal from '../ValueEditorModal';

const ModalTrigger = (props) => (
    <span
        onClick={props.onClick}
        className="actions_button">
        <Icon name='edit' />
    </span>
);

class EditButton extends Component {
    componentWillMount() {
        this.state = { isOpen: false };
        this.toggle = this.toggle.bind(this);
        this.confirmEdit = this.confirmEdit.bind(this);
    }

    toggle() {
        this.setState({ isOpen: !this.state.isOpen });
    }

    confirmEdit(name, value) {
        this.toggle();
        this.props.changeData(this.props.path, name, value);
    }

    render() {
        return (
            <ValueEditorModal
                path={this.props.path}
                data={this.props.data}
                modalTrigger={<ModalTrigger onClick={this.toggle} />}
                modalOpen={this.state.isOpen}
                onConfirm={this.confirmEdit}
                onCancel={this.toggle}
            />
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    data: selectData(state, ownProps.path),
});

const mapDispatchToProps = {
    changeData,
};

export default connect(mapStateToProps, mapDispatchToProps)(EditButton);
