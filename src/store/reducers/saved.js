import { fromJS } from 'immutable';
import {
    SAVED_JSON_FETCH_IN_PROGRESS,
    SAVED_JSON_FETCH_SUCCESS,
    SAVED_JSON_FETCH_ERROR,
} from '../constants';

const initialState = () => fromJS({
    data: {},
    loaded: false,
    inProgress: false,
    error: null,
});

export default (state = initialState(), action) => {
    switch(action.type) {
        case SAVED_JSON_FETCH_IN_PROGRESS:
            return state.merge({
                error: null,
                inProgress: true,
            });
        case SAVED_JSON_FETCH_SUCCESS:
            return fromJS({
                data: action.payload,
                loaded: true,
                inProgress: false,
                error: null,
            });
        case SAVED_JSON_FETCH_ERROR:
            return state.merge({
                error: action.error,
                inProgress: false,
            });
        default:
            return state;
    }
};
