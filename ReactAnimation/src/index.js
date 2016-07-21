require('./index.scss');
var React = require('react');
var ReactDom = require('react-dom');
var Link = require('react-router').Link;
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;
var browserHistory = require('react-router').browserHistory;
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');

var BlackPage = () => {
    return <div id="black">Black!</div>;
};

var GreenPage = () => {
    return <div id="green">Green!</div>;
};

var RedPage = () => {
    return <div id="red">Red!</div>;
};

var App = ({ children, location }) => {
    return (
        <div>
            <div style={{height: '40px', border: '1px solid white', 'backgroundColor': 'yellow'}}>
                <Link to="/">Black</Link> |
                <Link to="/pages/green">Green</Link> |
                <Link to="/pages/red">Red</Link> 
            </div>

            <ReactCSSTransitionGroup
                component="div"
                transitionName="example"
                transitionEnterTimeout={500}
                transitionLeaveTimeout={500}>

                    {React.cloneElement(children, {
                        key: location.pathname
                    })}
            </ReactCSSTransitionGroup>
        </div>
    );
};

var routes = (
    <Route path="/" component={App}>
        <IndexRoute component={BlackPage} />
        <Route path="pages/green" component={GreenPage} />
        <Route path="pages/red" component={RedPage} />
    </Route>
);

ReactDom.render(
    <Router history={browserHistory} routes={routes} />, 
    document.getElementById('app')
);