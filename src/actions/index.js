import { browserHistory } from 'react-router-redux';
import {
    GET_START,
    GET_SUCCESS,
    GET_FAILURE,
    POST_START,
    POST_SUCCESS,
    POST_FAILURE,
    SET_ID,
    CHANGE_LOGIN,
    CHANGE_PASSWORD,
    POST_LOGIN_START,
    POST_LOGIN_SUCCESS,
    POST_LOGIN_FAILURE
} from './actionTypes';

import {
    getDataApi,
    postDataApi,
    postLoginApi
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

const postSuccess = (data) => {
   return {
       type: POST_SUCCESS,
       payload: data
   };
};

export const getData = (request) => async dispatch => {
    dispatch({type: GET_START});
    console.log(request);
    try {
        const data = await getDataApi(request);
        dispatch({
            type: GET_SUCCESS,
            payload: data
        });
    } catch (err) {
        dispatch({
            type: GET_FAILURE,
            payload: err,
            error: true
        });
    }
};

export const postData = (request) => async dispatch => {
    dispatch({type: GET_START});
    console.log(request);
    try {
        const data = await postDataApi(request);
        dispatch({
            type: GET_SUCCESS,
            payload: data
        });
    } catch (err) {
        dispatch({
            type: GET_FAILURE,
            payload: err,
            error: true
        });
    }
};

/*function json(response) {  
    return response.json()  
  }

export const postData = (request) => async dispatch => {
    const url='';
    fetch(url, {  
        method: 'post',  
        headers: {  
          "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"  
        },  
        body: { email: 'natalia_diana@mail.ru', password: 'natasha888' }
      })
      .then(json)
      .then(function (data) {  
        console.log('Request succeeded with JSON response', data);  
      })  
      .catch(function (error) {  
        console.log('Request failed', error);  
      });
};*/

/*export const postData = (request, link) => async dispatch => {
    //dispatch(postSuccess(request)); // FIX ME
    process(request);
    dispatch(browserHistory.push(link));
};

export const postAndGetData = (request) => async dispatch => {
    //dispatch(postSuccess(request)); // FIX ME
    process(request);
};*/