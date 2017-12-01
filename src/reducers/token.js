import { 
  POST_LOGIN_SUCCESS
 } from '../actions/actionTypes';

const initialState = '';

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case POST_LOGIN_SUCCESS:
      return payload.token;
    default:
      return state;
  }
};