import { 
  CHANGE_LOGIN,
  CHANGE_PASSWORD
 } from '../actions/actionTypes';

const initialState = {email:'', password:''};

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case CHANGE_LOGIN:
      return payload;
    case CHANGE_PASSWORD:
      return payload;
    default:
      return state;
  }
};