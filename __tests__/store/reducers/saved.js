import { fromJS, is } from 'immutable';
import {
    SAVED_JSON_FETCH_IN_PROGRESS,
    SAVED_JSON_FETCH_SUCCESS,
    SAVED_JSON_FETCH_ERROR,
} from '../../../src/store/constants';
import savedReducer from '../../../src/store/reducers/saved';

describe('saved data reducer', () => {

    it('should update the inProgress flag when fetch is in progress', () => {
        const action = { type: SAVED_JSON_FETCH_IN_PROGRESS };
        const result = savedReducer(undefined, action);
        expect(result.get('inProgress')).toBe(true);
    });

    it('should update the data when fetch is successful', () => {
        const action = {
            type: SAVED_JSON_FETCH_SUCCESS,
            payload: {
                prop1: 'federico',
                prop2: true,
                prop3: ['abc', 'def'],
            },
        };
        const result = savedReducer(undefined, action);

        expect(is(result, fromJS({
            data: {
                prop1: 'federico',
                prop2: true,
                prop3: ['abc', 'def'],
            },
            loaded: true,
            inProgress: false,
            error: null,
        }))).toBe(true);
    });

    it('should update the error property when fetch is not successful', () => {
        const action = {
            type: SAVED_JSON_FETCH_ERROR,
            error: 'error message'
        };
        const result = savedReducer(undefined, action);
        expect(result.get('error')).toEqual('error message');
    });
});
