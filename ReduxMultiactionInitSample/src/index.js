import './index.scss'
import 'loaders.css/loaders.css'
import React, { PropTypes } from 'react';
import ReactDom from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import { connect } from 'react-redux';
import client from './client';

const initialState = {
    appStatus: 'initializing',
    currentUser: null,
    categories: []
};

const APP_INITIALIZATION_STARTED = 'APP_INITIALIZATION_STARTED';
const APP_INITIALIZED = 'APP_INITIALIZED';

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case APP_INITIALIZATION_STARTED:
            return Object.assign({}, state, { appStatus: 'initializing'});
    
        case APP_INITIALIZED:
            return Object.assign({}, state, { 
                appStatus: 'initialized', 
                currentUser: action.user,
                categories: state.categories.concat(action.categories) 
            });

        default:
            return state;
    }
};

const logger = createLogger(),
    store = createStore(rootReducer, applyMiddleware(thunk, logger));

var LoadingIndicator = () => {
    return <div className="loading-indicator-holder">
        <div className="loader-inner square-spin inner"><div></div></div>
    </div>;
}

var App = React.createClass({
    getInitialState: () => {
        return {
            isInitializing: true
        };
    },

    render: function () {
        if(this.state.isInitializing) {
            return <LoadingIndicator />;
        }

        return <div>
            Hello World!
        </div>;
    }
});

ReactDom.render(
    <App />, 
    document.getElementById('app')
);