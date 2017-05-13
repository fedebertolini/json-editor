import {
    EDITED_JSON_LOAD,
    EDITED_JSON_CHANGE,
    EDITED_JSON_DELETE
} from '../constants';

import { lastProperty } from '../../utils/path';

export const loadData = (data) => ({
    type: EDITED_JSON_LOAD,
    payload: data,
});

export const changeData = (path, data, name) => ({
    type: EDITED_JSON_CHANGE,
    payload: {
        name: name || lastProperty(path),
        path,
        data,
    },
});

export const deleteData = (path) => ({
    type: EDITED_JSON_DELETE,
    payload: path,
});
