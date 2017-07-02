import { fromJS, is } from 'immutable';
import {
    EDITED_JSON_LOAD,
    EDITED_JSON_CHANGE,
    EDITED_JSON_DELETE,
} from '../../../src/store/constants';
import reducer from '../../../src/store/reducers/edited';

describe('edited data reducer', () => {

    it('should load the data', () => {
        const action = {
            type: EDITED_JSON_LOAD,
            payload: {
                prop1: 'federico',
                prop2: true,
                prop3: ['abc', 'def'],
            },
        };
        const result = reducer(undefined, action);

        expect(is(result, fromJS({
            prop1: 'federico',
            prop2: true,
            prop3: ['abc', 'def'],
        }))).toBe(true);
    });

    it('should delete property', () => {
        const initialState = fromJS({
            obj: {
                child: {
                    prop1: 'fede',
                    prop2: 'test',
                },
                sibling: 'abc',
            },
        });
        const action = {
            type: EDITED_JSON_DELETE,
            payload: ['obj', 'child', 'prop1'],
        };
        const result = reducer(initialState, action);

        expect(is(result, fromJS({
            obj: {
                child: {
                    prop2: 'test',
                },
                sibling: 'abc',
            },
        }))).toBe(true);
    });

    it('should change property value', () => {
        const initialState = fromJS({
            obj: {
                child: {
                    prop1: 'fede',
                    prop2: 'test',
                },
                sibling: 'abc',
            },
        });
        const action = {
            type: EDITED_JSON_CHANGE,
            payload: {
                path: ['obj', 'child', 'prop1'],
                name: 'prop1',
                data: 5,
            },
        };
        const result = reducer(initialState, action);

        expect(is(result, fromJS({
            obj: {
                child: {
                    prop1: 5,
                    prop2: 'test',
                },
                sibling: 'abc',
            },
        }))).toBe(true);
    });

    it('should replace property', () => {
        const initialState = fromJS({
            obj: {
                child: {
                    prop1: 'fede',
                    prop2: 'test',
                },
                sibling: 'abc',
            },
        });
        const action = {
            type: EDITED_JSON_CHANGE,
            payload: {
                path: ['obj', 'child', 'prop1'],
                name: 'newName',
                data: 5,
            },
        };
        const result = reducer(initialState, action);

        expect(is(result, fromJS({
            obj: {
                child: {
                    newName: 5,
                    prop2: 'test',
                },
                sibling: 'abc',
            },
        }))).toBe(true);
    });
});
