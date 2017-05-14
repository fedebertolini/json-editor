import { fromJS } from 'immutable';
import {
    EDITED_JSON_LOAD,
    EDITED_JSON_CHANGE,
    EDITED_JSON_DELETE,
    JSON_CLEAR,
} from '../constants';

import { lastProperty } from '../../utils/path';

const initialState = () => fromJS({
    data: {},
    hasChanges: false,
});

const dataPath = (path) => ['data'].concat(path);

export default (state = initialState(), action) => {
    switch(action.type) {
        case EDITED_JSON_LOAD:
            return fromJS({
                data: action.payload,
                hasChanges: false,
            });
        case EDITED_JSON_CHANGE: {
            const { path, name, data } = action.payload;
            let newState = state.set('hasChanges', true);
            const immutableData = fromJS(data);

            if (lastProperty(path) !== name) {
                newState = newState.deleteIn(dataPath(path));
                const newPath = path.slice(0, path.length - 1).concat(name);
                return newState.setIn(dataPath(newPath), immutableData);
            }
            return newState.setIn(dataPath(path), immutableData);
        }
        case EDITED_JSON_DELETE:
            const newState = state.set('hasChanges', true);
            return newState.deleteIn(dataPath(action.payload));
        case JSON_CLEAR:
            return initialState();
        default:
            return state;
    }
};
