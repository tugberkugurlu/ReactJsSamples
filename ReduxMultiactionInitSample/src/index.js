import './bootswatch.less';
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
            isInitializing: false
        };
    },

    render: function () {
        if(this.state.isInitializing) {
            return <LoadingIndicator />;
        }

        return <div>
            <nav className="navbar navbar-inverse">
                <div className="container">
                    <div className="navbar-header">
                        <a href="#" className="navbar-brand">RR</a>
                    </div>
                    <p className="navbar-text navbar-right">
                        Signed in as <a href="#" className="navbar-link">Tugberk</a>
                    </p>
                    <div className="clearfix"></div>
                </div>
            </nav>
            <div className="container">
                <div className="row">
                    <div className="col-xs-2">
                        <ul className="nav nav-pills nav-stacked">
                            <li role="presentation" className="active"><a href="#">Home</a></li>
                            <li role="presentation"><a href="#">Profile</a></li>
                            <li role="presentation"><a href="#">Messages</a></li>
                        </ul>
                    </div>
                    <div className="col-xs-10">
                        <ol className="breadcrumb">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Library</a></li>
                            <li class="active">Data</li>
                        </ol>

                        <div className="alert alert-info">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vehicula volutpat 
                            lorem, ac mollis nisi interdum a. Aenean erat magna, aliquet quis 
                            urna eu, condimentum.
                        </div>
                        <div className="well well-lg">
                            Cras mollis tempor dui, ac commodo diam blandit eget. Sed sollicitudin, erat ut tempus vehicula, massa quam posuere lacus, in interdum nibh lectus in erat. Nulla elementum est tortor, sed cursus justo gravida at. Suspendisse potenti. Sed pellentesque blandit nibh, vel rhoncus neque fermentum sed.
                        </div>
                    </div>
                </div>
            </div>
        </div>;
    }
});

ReactDom.render(
    <App />, 
    document.getElementById('app')
);