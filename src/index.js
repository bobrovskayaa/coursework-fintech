import './main.css'
import './reset.css'

import React from 'react'
import ReactDOM from 'react-dom'
import {createStore, applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import {syncHistoryWithStore} from 'react-router-redux'
import {Router, Route, browserHistory} from 'react-router'
import {Provider} from 'react-redux'

import reducers from './reducers'
import Home from './pages/Home'
import Login from './pages/Login'

const store = createStore(reducers, composeWithDevTools(
    applyMiddleware(thunk)
))

const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Route path='/' component={Home} />
            <Route path='/login' component={Login} />
            <Route path='*' component={()=> <span>IS EMPTY</span>} />
        </Router>
    </Provider>,
    document.getElementById('root')
);
