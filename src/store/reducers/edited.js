import { fromJS } from 'immutable';
import {
    EDITED_JSON_LOAD,
    EDITED_JSON_CHANGE,
    EDITED_JSON_DELETE
} from '../constants';

const initialState = () => fromJS({
    data: {},
    hasChanges: false,
});

export default (state = initialState(), action) => {
    switch(action.type) {
        case EDITED_JSON_LOAD:
            return fromJS({
                data: action.payload,
                hasChanges: false,
            });
        case EDITED_JSON_CHANGE: {
            let newState = state.set('hasChanges', true);
            const path = ['data'].concat(action.payload.path);
            newState = state.setIn(path, action.payload.data);
            return newState;
        }
        case EDITED_JSON_DELETE:
            return state.deleteIn(['data'].concat(action.payload));
        default:
            return state;
    }
};
