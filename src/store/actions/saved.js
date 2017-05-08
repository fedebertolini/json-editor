import request from 'request';
import {
    SAVED_JSON_FETCH_IN_PROGRESS,
    SAVED_JSON_FETCH_SUCCESS,
    SAVED_JSON_FETCH_ERROR,
} from '../constants';

export const fetchData = url => dispatch => {
    dispatch({ type: SAVED_JSON_FETCH_IN_PROGRESS });

    request(url, (error, response, body) => {
        if (response && response.statusCode === 200) {
            try {
                const json = JSON.parse(body);
                dispatch({
                    type: SAVED_JSON_FETCH_SUCCESS,
                    payload: json,
                });
            } catch(e) {
                dispatch({
                    type: SAVED_JSON_FETCH_ERROR,
                    error: e.message,
                });
            }
        } else {
            dispatch({
                type: SAVED_JSON_FETCH_ERROR,
                error: (error && error.message) || `Unexpected response code: ${response.statusCode}`,
            });
        }
    });
};
