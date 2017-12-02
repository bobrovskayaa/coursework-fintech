import { 
  POST_FORM_SUCCESS
 } from '../actions/actionTypes';

const initialState = {form: ''};

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case POST_FORM_SUCCESS:
      return payload;
    default:
      return state;
  }
};