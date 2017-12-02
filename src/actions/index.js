import {
    POST_LOGIN_START,
    POST_LOGIN_SUCCESS,
    POST_LOGIN_FAILURE,
    POST_FORM_START,
    POST_FORM_SUCCESS,
    POST_FORM_FAILURE
} from './actionTypes';

import {
    postLoginApi,
    postFormApi
} from '../api';

export const postLogin = (data) => async dispatch => {
    dispatch({type: POST_LOGIN_START});

    try {
        const answerData = await postLoginApi(data);
        dispatch({
            type: POST_LOGIN_SUCCESS,
            payload: answerData
        });
    } catch (err) {
        dispatch({
            type: POST_LOGIN_FAILURE,
            payload: err,
            error: true
        });
    }
};

export const postForm = (data) => async dispatch => {
    dispatch({type: POST_FORM_START});

    try {
        const answerData = await postFormApi(data);
        dispatch({
            type: POST_FORM_SUCCESS,
            payload: answerData
        });
    } catch (err) {
        dispatch({
            type: POST_FORM_FAILURE,
            payload: err,
            error: true
        });
    }
};
