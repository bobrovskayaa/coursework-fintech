import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import token from './token';
import form from './form'

export default combineReducers({
    routing: routerReducer,
      token,
      form
});