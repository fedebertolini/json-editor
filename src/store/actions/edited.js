import { EDITED_JSON_LOAD, EDITED_JSON_CHANGE } from '../constants';

export const loadData = (data) => ({
    type: EDITED_JSON_LOAD,
    payload: data,
});

export const changeData = (path, data) => ({
    type: EDITED_JSON_LOAD,
    payload: {
        path,
        data,
    },
});
