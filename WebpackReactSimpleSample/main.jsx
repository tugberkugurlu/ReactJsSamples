var React = require('react');
var ReactDom = require('react-dom');

var MyComponent = React.createClass({
    render: function () {
        return (<div>Hello World</div>);
    }
});

ReactDom.render(<MyComponent />, document.getElementById('container'));