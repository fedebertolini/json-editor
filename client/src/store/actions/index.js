import { ActionCreators } from 'redux-undo';
import { JSON_CLEAR } from '../constants';

export const clearData = () => dispatch => {
    dispatch({
        type: JSON_CLEAR,
    });
    dispatch(ActionCreators.clearHistory());
};
