import React from 'react';
import { Icon } from 'semantic-ui-react';

const DeleteButton = (props) => (
    <span
        onClick={props.onClickHandler}
        className="actions_button actions_button_red">
        <Icon name='delete' />
    </span>
);

export default DeleteButton;
