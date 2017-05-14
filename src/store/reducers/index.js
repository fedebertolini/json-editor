import { combineReducers } from 'redux-immutable';
import undoable, { includeAction } from 'redux-undo';
import edited from './edited';
import saved from './saved';
import { EDITED_JSON_CHANGE, EDITED_JSON_DELETE } from '../constants';

const undoableConfig = {
    limit: 5,
    filter: includeAction([EDITED_JSON_CHANGE, EDITED_JSON_DELETE]),
};

export default combineReducers({
    edited: undoable(edited, undoableConfig),
    saved
});
