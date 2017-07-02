import React from 'react';
import { Icon } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { changeData } from  '../../store/actions/edited';
import { selectData } from '../../store/selectors/edited';

const AddArrayItemButton = ({ path, data, changeData }) =>  {
    const onClick = () => {
        const newArray = data.push(null);
        changeData(path, newArray);
    };
    return (
        <span
            onClick={onClick}
            className="actions_button actions_button_add">
            <Icon name='add' />
        </span>
    );
};

const mapStateToProps = (state, ownProps) => ({
    data: selectData(state, ownProps.path),
});

const mapDispatchToProps = {
    changeData,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddArrayItemButton);
