import React, { Component } from 'react';
import { fromJS } from 'immutable';
import { Icon } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { changeData } from  '../../store/actions/edited';
import { selectData } from '../../store/selectors/edited';
import ValueEditorModal from '../ValueEditorModal';

const ModalTrigger = (props) => (
    <span
        onClick={props.onClick}
        className="actions_button actions_button_add">
        <Icon name='add' />
    </span>
);

class AddObjectPropertyButton extends Component {
    componentWillMount() {
        this.state = { isOpen: false };
        this.toggle = this.toggle.bind(this);
        this.confirmAdd = this.confirmAdd.bind(this);
    }

    toggle() {
        this.setState({ isOpen: !this.state.isOpen });
    }

    confirmAdd(name, value) {
        this.toggle();

        const { path, data } = this.props;
        const newData = data.set(name, fromJS(value));
        this.props.changeData(path, newData);
    }

    render() {
        if (!this.state.isOpen) {
            return <ModalTrigger onClick={this.toggle} />;
        }
        return (
            <ValueEditorModal
                title="Add Property"
                path={this.props.path.concat([''])}
                data={null}
                modalOpen={this.state.isOpen}
                onConfirm={this.confirmAdd}
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

export default connect(mapStateToProps, mapDispatchToProps)(AddObjectPropertyButton);
