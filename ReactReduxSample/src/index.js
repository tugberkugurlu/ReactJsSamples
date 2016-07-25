var Redux = require('redux');
var React = require('react');
var ReactDom = require('react-dom');

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

var store = Redux.createStore(counter);

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