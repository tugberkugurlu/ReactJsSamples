var React = require('react');
var ReactDom = require('react-dom');
var d3 = require('d3');

var Line = React.createClass({
    componentDidMount: function () {
        var el = ReactDom.findDOMNode(this);
        var svg = d3.select(el)
            .append('svg')
                .attr('class', 'd3')
                .attr("width", 200)
                .attr("height", 30)
            .append('line')
                .attr("x1", 0)
                .attr("y1", 10)
                .attr("x2", 200)
                .attr("y2", 10)
                .attr("stroke-width", 2)
                .attr("stroke", this.props.color);
    },
    render: function () {
        return <span></span>;
    }
});

var Bar = React.createClass({
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

var HelloWorld = React.createClass({
    render: function () {
        return <div>
            <div><Bar /></div>
            <br />
            <div>
                <Line color="#ccffcc" />
                <Line color="#009933" />
                <Line color="#f0f5f5" />
            </div>
        </div>;
    }
});

ReactDom.render(
    <HelloWorld />, 
    document.getElementById('app')
);