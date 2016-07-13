var Redux = require('redux');
var React = require('react');
var ReactDom = require('react-dom');

var MyComponent = React.createClass({
    render: function () {
        return (<div>Hello World</div>);
    }
});

var counter = function (state, action) {
    if(state === undefined) {
        state = 0;
    }

    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state;
    }
}

var store = Redux.createStore(counter);
var render = function () {
    document.getElementById('counter').innerHTML = store.getState();
};

store.subscribe(render);
render();

document.addEventListener('click', () => {
    store.dispatch({ type: 'INCREMENT' });
});

ReactDom.render(<MyComponent />, document.getElementById('container'));