var React = require('react');
var ReactDom = require('react-dom');
var d3 = require('d3');

var Line = React.createClass({
    componentDidMount: function () {

        // http://stackoverflow.com/questions/21990857/d3-js-how-to-get-the-computed-width-and-height-for-an-arbitrary-element
        // http://stackoverflow.com/questions/31438631/aligning-the-label-in-d3-line-chart
        // http://stackoverflow.com/questions/15500894/background-color-of-text-in-svg

        var el = ReactDom.findDOMNode(this);
        var svg = d3.select(el)
            .append('svg')
                .attr('class', 'd3')
                .attr("width", this.props.width)
                .attr("height", 30);
            
            svg.append('line')
                .attr("x1", 0)
                .attr("y1", 10)
                .attr("x2", 200)
                .attr("y2", 10)
                .attr("stroke-width", 2)
                .attr("stroke", this.props.color)
                .on("mouseover", () => {
                    console.log("mouse over...");
                })
                .on('mouseout', () => {
                    console.log("mouse out...");
                });

            var text = svg.append('text')
                .attr("dy", ".35em")
                .attr("class","legend")
                .attr("text-anchor", "start")
                .attr('font-size', '10px')
                .style("fill", "#000")
                .style('font-family', 'sans-serif')
                .attr('y', 10)
                .text("350 cal");

            var textWidth = text.node().getBBox().width;
            text.attr('x', (this.props.width - textWidth) / 2);
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
                <Line color="#ccffcc" width="150" />
                <Line color="#009933" width="90" />
                <Line color="#f0f5f5" width="50" />
            </div>
        </div>;
    }
});

ReactDom.render(
    <HelloWorld />, 
    document.getElementById('app')
);