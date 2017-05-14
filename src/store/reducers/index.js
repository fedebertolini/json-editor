import { combineReducers } from 'redux-immutable';
import undoable from 'redux-undo';
import edited from './edited';
import saved from './saved';

const undoableConfig = {
    limit: 5,
};

export default combineReducers({
    edited: undoable(edited, undoableConfig),
    saved
});
