var React = require('react');
var ReactDom = require('react-dom');
var LineChart = require("react-chartjs").Line;
var PieChart = require("react-chartjs").Pie;

var MyLineChart = () => {
    const chartData = {
            labels: ["January", "February", "March", "April", "May", "June", "July"],
            datasets: [
                {
                    label: "My First dataset",
                    fill: false,
                    lineTension: 0.1,
                    backgroundColor: "rgba(75,192,192,0.4)",
                    borderColor: "rgba(75,192,192,1)",
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: "rgba(75,192,192,1)",
                    pointBackgroundColor: "#fff",
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: "rgba(75,192,192,1)",
                    pointHoverBorderColor: "rgba(220,220,220,1)",
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: [65, 59, 80, 81, 56, 55, 40],
                    spanGaps: false,
                }
            ]
        },
        chartOptions = {
            scales: {
                xAxes: [{
                        stacked: true
                }],
                yAxes: [{
                        stacked: true
                }]
            }
        };

    return <LineChart data={chartData} options={chartOptions} width="600" height="250"/>;
};

var MyPieChart = ({data}) => {
        const chartOptions = {
            animateRotate: false
        };

    return <PieChart data={data} options={chartOptions} width="250" height="400"/>;
};

var HelloWorld = () => {
    const chartData = [
        {
            value: 20,
            color:"#878BB6"
        },
        {
            value : 40,
            color : "#4ACAB4"
        },
        {
            value : 10,
            color : "#FF8153"
        },
        {
            value : 30,
            color : "#FFEA88"
        }
    ];

    return <div>
        <h2>Line Chart</h2>
        <p>see: <a href="http://www.chartjs.org/docs/#line-chart">http://www.chartjs.org/docs/#line-chart</a></p>
        <MyLineChart />

        <h2>Pie Chart</h2>
        <p>see: <a href="http://www.chartjs.org/docs/#doughnut-pie-chart">http://www.chartjs.org/docs/#doughnut-pie-chart</a></p>
        <MyPieChart data={chartData} />
    </div>;
};

ReactDom.render(
    <HelloWorld />, 
    document.getElementById('app')
);