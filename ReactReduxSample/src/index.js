var React = require('react');
var ReactDom = require('react-dom');
import { applyMiddleware, createStore } from 'redux';
import createLogger from 'redux-logger';

var counter = function (state = 0, action) {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state;
    }
};

const logger = createLogger();
const store = createStore(counter, applyMiddleware(logger));

var HelloWorld = React.createClass({
    getInitialState: function () {
        return {
            count: store.getState()
        };
    },

    componentDidMount: function () {
        this.unsubscribe = store.subscribe(function () {
            this.setState({
                count: store.getState()
            });
        }.bind(this));
    },

    componentWillUnmount: function () {
        this.unsubscribe();
    },

    render: function () {
        return <div>count: {this.state.count}</div>;
    }
});

document.addEventListener('click', () => {
    store.dispatch({ type: 'INCREMENT' });
});

ReactDom.render(
    <HelloWorld />, 
    document.getElementById('app')
);