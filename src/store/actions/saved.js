import { get } from 'axios';
import {
    SAVED_JSON_FETCH_IN_PROGRESS,
    SAVED_JSON_FETCH_SUCCESS,
    SAVED_JSON_FETCH_ERROR,
    EDITED_JSON_LOAD
} from '../constants';

export const fetchData = url => dispatch => {
    dispatch({ type: SAVED_JSON_FETCH_IN_PROGRESS });

    let requestUrl = url;
    if (process.env.NODE_ENV === 'production') {
        requestUrl = `${document.location.protocol}//${document.location.host}/api/${encodeURIComponent(url)}`;
    }

    get(requestUrl).then((response) => {
        try {
            dispatch({
                type: SAVED_JSON_FETCH_SUCCESS,
                payload: response.data,
            });
            dispatch({
                type: EDITED_JSON_LOAD,
                payload: response.data,
            });
        } catch(e) {
            dispatch({
                type: SAVED_JSON_FETCH_ERROR,
                error: e.message,
            });
        }
    })
    .catch((error) => {
        dispatch({
            type: SAVED_JSON_FETCH_ERROR,
            error: `Request error: ${error.message}`,
        });
    });
};

export const loadData = json => dispatch => {
    dispatch({
        type: SAVED_JSON_FETCH_SUCCESS,
        payload: json,
    });
    dispatch({
        type: EDITED_JSON_LOAD,
        payload: json,
    });
}
