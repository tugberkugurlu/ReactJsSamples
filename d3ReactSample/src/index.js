var React = require('react');
var ReactDom = require('react-dom');
var d3 = require('d3');

console.log(d3.version);

var HelloWorld = () => {
    return <div>Hello World!</div>;
};

ReactDom.render(
    <HelloWorld />, 
    document.getElementById('app')
);