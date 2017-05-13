import React from 'react';
import { Icon } from 'semantic-ui-react';

const EditButton = (props) => (
    <span
        onClick={props.onClickHandler}
        className="actions_button">
        <Icon name='edit' />
    </span>
);

export default EditButton;
