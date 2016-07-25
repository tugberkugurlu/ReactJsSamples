var React = require('react');
var ReactDom = require('react-dom');
var $ = require('jquery');

var HelloWorld = React.createClass({
    componentDidMount: function () {
        var el = ReactDom.findDOMNode(this),
            $el = $(el);

        $el.text('Hello World!');
    },
    render: function () {
        return <div></div>;
    }
});

ReactDom.render(
    <HelloWorld />, 
    document.getElementById('app')
);