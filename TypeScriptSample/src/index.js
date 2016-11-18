var React = require('react');
var ReactDom = require('react-dom');

var HelloWorld = () => {
    return <div>Hello World!</div>;
};

ReactDom.render(
    <HelloWorld />, 
    document.getElementById('app')
);