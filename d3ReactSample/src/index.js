var React = require('react');
var ReactDom = require('react-dom');
var d3 = require('d3');

var HelloWorld = React.createClass({
    componentDidMount: function () {
        var el = ReactDom.findDOMNode(this);
        var svg = d3.select(el)
            .append('svg')
                .attr('class', 'd3')
            .append('rect')
                .attr('width', 50)
                .attr('height', 200)
                .style('fill', 'blue');
    },
    render: function () {
        return <div></div>;
    }
});

ReactDom.render(
    <HelloWorld />, 
    document.getElementById('app')
);