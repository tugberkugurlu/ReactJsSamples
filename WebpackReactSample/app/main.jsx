require("./bootswatch.less");
var React = require('react');
var ReactDom = require('react-dom');
var Person = require('./Person.jsx');

ReactDom.render(<Person />, document.getElementById('container'));