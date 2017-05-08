import { combineReducers } from 'redux-immutable';
import edited from './edited';
import saved from './saved';

export default combineReducers({
    edited,
    saved
});
