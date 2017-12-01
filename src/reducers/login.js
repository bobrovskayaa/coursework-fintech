import { GET_SUCCESS } from '../actions/actionTypes';

const initialState = {email:'', password:''};

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case GET_SUCCESS:
      return payload;
    default:
      return state;
  }
};