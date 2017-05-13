import { fromJS } from 'immutable';
import { EDITED_JSON_LOAD, EDITED_JSON_CHANGE } from '../constants';

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
            const path = ['data'].concat(action.path);
            newState = state.setIn(path, action.payload);
            return newState;
        }
        default:
            return state;
    }
};
