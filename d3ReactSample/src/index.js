import './app.scss';
import $ from 'jquery';
var React = require('react');
var ReactDom = require('react-dom');
var d3 = require('d3');

var Line = React.createClass({
    printLine: function(props) {
        var el = ReactDom.findDOMNode(this),
            $svg = $(el).find('svg');

        if($svg.length > 0) {
            $svg.remove();
        }

        var svg = d3.select(el)
            .append('svg')
                .attr('class', 'd3')
                .attr("width", props.width)
                .attr("height", 30);
            
            svg.append('line')
                .attr("x1", 0)
                .attr("y1", 10)
                .attr("x2", props.width)
                .attr("y2", 10)
                .attr("stroke-width", 2.5)
                .attr("stroke", props.color)
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
                .attr('font-size', '12px')
                .style("fill", "#000")
                .style('font-family', 'sans-serif')
                .attr('y', 10)
                .text(`${props.calorie} cal`);

        var textWidth = text.node().getBBox().width;
        text.attr('x', (props.width - textWidth) / 2);
    },
    componentDidMount: function () {
        this.printLine(this.props);
    },
    shouldComponentUpdate: function() {
        return false;
    },
    componentWillReceiveProps: function(nextProps) {
        this.printLine(nextProps);
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

var CalorieLine = React.createClass({
    getInitialState: function() {
        return {
            containerSize: 0
        };
    },
    handleResize: function() {
        var el = ReactDom.findDOMNode(this),
            containerWidth = $(el).width();

        this.setState({
            containerSize: containerWidth     
        });
    },
    componentDidMount: function() {
        var el = ReactDom.findDOMNode(this),
            containerWidth = $(el).width();

        this.setState({
            containerSize: containerWidth     
        });

        window.addEventListener('resize', this.handleResize);
    },
    componentWillUnmount: function() {
        window.removeEventListener('resize', this.handleResize);
    },
    render: function () {
        const { breakfast, lunch, dinner } = this.props;
        const { containerSize } = this.state;
        const totalcalorie = breakfast + lunch + dinner;
        const breakfastRatio = (containerSize * breakfast) / totalcalorie,
            lunchRatio = (containerSize * lunch) / totalcalorie,
            dinnerRatio = (containerSize * dinner) / totalcalorie;

        return <div style={{width: '100%'}}>
            <Line color="#ccffcc" calorie={breakfast} width={breakfastRatio} />
            <Line color="#009933" calorie={lunch} width={lunchRatio} />
            <Line color="#f0f5f5" calorie={dinner} width={dinnerRatio} />
        </div>;
    }
});

var HelloWorld = React.createClass({
    render: function () {
        return <div>
            <div><Bar /></div>
            <br />
            <div>
                <Line color="#ccffcc" calorie={250} width="250" />
                <Line color="#009933" calorie={90} width="90" />
                <Line color="#f0f5f5" calorie={70} width="70" />
            </div>
            <br />
            <div className="profile-holder">
                <CalorieLine breakfast={400} lunch={230} dinner={680} />
            </div>
        </div>;
    }
});

ReactDom.render(
    <HelloWorld />, 
    document.getElementById('app')
);