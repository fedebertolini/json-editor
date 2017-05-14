import { fromJS, Map } from 'immutable';
import {
    EDITED_JSON_LOAD,
    EDITED_JSON_CHANGE,
    EDITED_JSON_DELETE,
    JSON_CLEAR,
} from '../constants';

import { lastProperty } from '../../utils/path';

const initialState = () => new Map();

export default (state = initialState(), action) => {
    switch(action.type) {
        case EDITED_JSON_LOAD:
            return fromJS(action.payload);
        case EDITED_JSON_CHANGE: {
            const { path, name, data } = action.payload;
            const immutableData = fromJS(data);

            if (lastProperty(path) !== name) {
                const newPath = path.slice(0, path.length - 1).concat(name);
                return state.deleteIn(path).setIn(newPath, immutableData);
            }
            return state.setIn(path, immutableData);
        }
        case EDITED_JSON_DELETE:
            return state.deleteIn(action.payload);
        case JSON_CLEAR:
            return initialState();
        default:
            return state;
    }
};
